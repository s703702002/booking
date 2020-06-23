import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useToggle from "hooks/useToggle";
import TrainInfoDialog from "./components/TrainInfoDialog";

export const NoResults = () => (
  <TableRow>
    <TableCell colSpan="4">尚無資料</TableCell>
  </TableRow>
);

const Row = ({ detail }) => {
  const [isOpen, toggle] = useToggle();

  const TrainNo = detail.DailyTrainInfo.TrainNo;
  const DepartureTime = detail.OriginStopTime.DepartureTime;
  const ArrivalTime = detail.DestinationStopTime.ArrivalTime;

  return (
    <TableRow>
      <TableCell>
        <Typography color="primary">{TrainNo}</Typography>
      </TableCell>
      <TableCell>{DepartureTime}</TableCell>
      <TableCell>{ArrivalTime}</TableCell>
      <TableCell>
        <Button color="primary" onClick={toggle}>
          查看
        </Button>
        <TrainInfoDialog trainNo={TrainNo} isOpen={isOpen} toggle={toggle} />
      </TableCell>
    </TableRow>
  );
};

export default Row;
