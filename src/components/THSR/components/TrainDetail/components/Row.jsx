import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { minsToTimes, timesToMins } from "utils";

export const NoResults = () => (
  <TableRow>
    <TableCell colSpan="4">尚無資料</TableCell>
  </TableRow>
);

const Row = ({ detail }) => {
  const TrainNo = detail.DailyTrainInfo.TrainNo;
  const DepartureTime = detail.OriginStopTime.DepartureTime;
  const ArrivalTime = detail.DestinationStopTime.ArrivalTime;
  const Dmins = timesToMins(DepartureTime);
  const Amins = timesToMins(ArrivalTime);

  return (
    <TableRow>
      <TableCell className="text-info font-weight-bold">{TrainNo}</TableCell>
      <TableCell>{DepartureTime}</TableCell>
      <TableCell>{ArrivalTime}</TableCell>
      <TableCell>{minsToTimes(Amins - Dmins)}</TableCell>
    </TableRow>
  );
};

export default Row;
