import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
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
      <TableCell className="text-info font-weight-bold">{TrainNo}</TableCell>
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
