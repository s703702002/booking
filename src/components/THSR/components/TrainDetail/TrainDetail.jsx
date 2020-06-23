import React, { useState } from "react";
import useSWR from "swr";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { fetcher } from "apis/THSR";
import { timesToMins } from "utils";
import SortIcon from "components/SortIcon";

import Row, { NoResults } from "./components/Row";

const TrainDetail = ({
  departure,
  arrival,
  trainDate,
  departureTime,
  arrivalTime
}) => {
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState();

  const shouldFetch = departure && arrival && trainDate;

  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const { data } = useSWR(
    () =>
      shouldFetch &&
      `/v2/Rail/THSR/DailyTimetable/OD/${departure}/to/${arrival}/${trainDate}`,
    fetcher,
    { suspense: true }
  );

  const depFilterTime = timesToMins(departureTime);
  const arrFilterTime = timesToMins(arrivalTime);

  const trainDetails = data
    ? data.filter(d => {
        const depTime = timesToMins(d.OriginStopTime.DepartureTime);
        const arrTime = timesToMins(d.DestinationStopTime.ArrivalTime);
        return depTime > depFilterTime && arrTime < arrFilterTime;
      })
    : [];

  if (trainDetails.length < 1) return null;

  const onClickDepartureSort = () => {
    setSortBy("departure");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const onClickArrivalSort = () => {
    setSortBy("arrival");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const renderList = trainDetails.sort((a, b) => {
    if (sortBy === "departure") {
      const aDepTimeMins = timesToMins(a.OriginStopTime.DepartureTime);
      const bDepTimeMins = timesToMins(b.OriginStopTime.DepartureTime);

      return order === "desc"
        ? bDepTimeMins - aDepTimeMins
        : aDepTimeMins - bDepTimeMins;
    } else if (sortBy === "arrival") {
      const aArrTimeMins = timesToMins(a.DestinationStopTime.ArrivalTime);
      const bArrTimeMins = timesToMins(b.DestinationStopTime.ArrivalTime);

      return order === "desc"
        ? bArrTimeMins - aArrTimeMins
        : aArrTimeMins - bArrTimeMins;
    } else {
      return true;
    }
  });

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>車次</TableCell>
            <TableCell pointer onClick={onClickDepartureSort}>
              <span>發車</span>
              {sortBy === "departure" ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell pointer onClick={onClickArrivalSort}>
              <span>到達</span>
              {sortBy === "arrival" ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell>總時程</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderList.length > 0 ? (
            renderList.map(detail => (
              <Row key={detail.DailyTrainInfo.TrainNo} detail={detail} />
            ))
          ) : (
            <NoResults />
          )}
        </TableBody>
      </Table>
      <footer className="fixed-bottom">
        <p>更新時間: {data[0].UpdateTime}</p>
      </footer>
    </div>
  );
};

export default TrainDetail;
