import React, { useState } from "react";
import useSWR from "swr";

import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { swrConfig } from "apis/config";
import { fetcher } from "apis/THSR";
import { timesToMins } from "utils";

import Row, { NoResults } from "./components/Row";
import SortIcon from "components/SortIcon";

const TrainDetail = ({ departure, arrival, trainDate }) => {
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState();

  const shouldFetch = departure.StationID && arrival.StationID && trainDate;

  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const { data } = useSWR(
    () =>
      shouldFetch &&
      `/v2/Rail/TRA/DailyTimetable/OD/${departure.StationID}/to/${arrival.StationID}/${trainDate}?format=JSON`,
    fetcher,
    swrConfig
  );

  const onClickDepartureSort = () => {
    setSortBy("departure");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const onClickArrivalSort = () => {
    setSortBy("arrival");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const trainDetails = data ? data : [];

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
            <TableCell>車號</TableCell>
            <TableCell onClick={onClickDepartureSort}>
              <span>發車</span>
              {sortBy === "departure" ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell onClick={onClickArrivalSort}>
              <span>到達</span>
              {sortBy === "arrival" ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell>詳細資訊</TableCell>
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
        <p>更新時間: {data?.[0]?.UpdateTime || "---"}</p>
      </footer>
    </div>
  );
};

export default TrainDetail;
