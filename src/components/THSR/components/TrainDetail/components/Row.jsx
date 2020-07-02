import React from 'react';
import { parseISO, differenceInMinutes } from 'date-fns';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export const NoResults = () => (
  <TableRow>
    <TableCell colSpan="4">尚無資料</TableCell>
  </TableRow>
);

const Row = ({ detail, trainDate }) => {
  const TrainNo = detail.DailyTrainInfo.TrainNo;
  const DepartureTime = detail.OriginStopTime.DepartureTime;
  const ArrivalTime = detail.DestinationStopTime.ArrivalTime;
  const dTime = parseISO(`${trainDate} ${DepartureTime}`);
  const aTime = parseISO(`${trainDate} ${ArrivalTime}`);

  return (
    <TableRow>
      <TableCell>
        <Typography color="primary">{TrainNo}</Typography>
      </TableCell>
      <TableCell>{DepartureTime}</TableCell>
      <TableCell>{ArrivalTime}</TableCell>
      <TableCell>{differenceInMinutes(aTime, dTime)} 分</TableCell>
    </TableRow>
  );
};

export default Row;
