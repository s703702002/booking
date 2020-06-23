import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

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
      <TableCell>
        <Typography color="primary">{TrainNo}</Typography>
      </TableCell>
      <TableCell>{DepartureTime}</TableCell>
      <TableCell>{ArrivalTime}</TableCell>
      <TableCell>{minsToTimes(Amins - Dmins)}</TableCell>
    </TableRow>
  );
};

export default Row;
