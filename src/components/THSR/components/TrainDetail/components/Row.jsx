import React from "react";
import { minsToTimes, timesToMins } from "utils";

export const NoResults = () => (
  <tr>
    <td colSpan="4">尚無資料</td>
  </tr>
);

const Row = ({ detail }) => {
  const TrainNo = detail.DailyTrainInfo.TrainNo;
  const DepartureTime = detail.OriginStopTime.DepartureTime;
  const ArrivalTime = detail.DestinationStopTime.ArrivalTime;
  const Dmins = timesToMins(DepartureTime);
  const Amins = timesToMins(ArrivalTime);

  return (
    <tr>
      <td className="text-info font-weight-bold">{TrainNo}</td>
      <td>{DepartureTime}</td>
      <td>{ArrivalTime}</td>
      <td>{minsToTimes(Amins - Dmins)}</td>
    </tr>
  );
};

export default Row;
