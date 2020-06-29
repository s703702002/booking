import React, { useState } from "react";
import useSWR from "swr";
import { parseISO, isBefore, isAfter, compareAsc, compareDesc } from "date-fns";

import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { swrConfig } from "apis/config";
import { fetcher } from "apis/THSR";

import Row, { NoResults } from "./components/Row";
import SortIcon from "components/SortIcon";

const TrainDetail = ({
  departure,
  arrival,
  trainDate,
  departureTime,
  arrivalTime
}) => {
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

  const depFilterTime = parseISO(`${trainDate} ${departureTime}`);
  const arrFilterTime = parseISO(`${trainDate} ${arrivalTime}`);

  const onClickDepartureSort = () => {
    setSortBy("departure");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const onClickArrivalSort = () => {
    setSortBy("arrival");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const trainDetails = data
    ? data.filter(d => {
        const depTime = parseISO(
          `${trainDate} ${d.OriginStopTime.DepartureTime}`
        );
        const arrTime = parseISO(
          `${trainDate} ${d.DestinationStopTime.ArrivalTime}`
        );
        return (
          isAfter(depTime, depFilterTime) && isBefore(arrTime, arrFilterTime)
        );
      })
    : [];

  const renderList = trainDetails.sort((a, b) => {
    if (sortBy === "departure") {
      const aDepTime = parseISO(
        `${trainDate} ${a.OriginStopTime.DepartureTime}`
      );
      const bDepTime = parseISO(
        `${trainDate} ${b.OriginStopTime.DepartureTime}`
      );

      return order === "desc"
        ? compareDesc(aDepTime, bDepTime)
        : compareAsc(aDepTime, bDepTime);
    } else if (sortBy === "arrival") {
      const aArrTime = parseISO(
        `${trainDate} ${a.DestinationStopTime.ArrivalTime}`
      );
      const bArrTime = parseISO(
        `${trainDate} ${b.DestinationStopTime.ArrivalTime}`
      );

      return order === "desc"
        ? compareDesc(aArrTime, bArrTime)
        : compareAsc(aArrTime, bArrTime);
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
