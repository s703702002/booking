import React, { Suspense, useState } from "react";
import SearchPanel from "./components/SearchPanel";
import TrainDetail from "./components/TrainDetail";

const TRA = () => {
  const [trainDate, setTrainDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const onSearch = ({
    date,
    departure,
    arrival,
    departureTime,
    arriveTime
  }) => {
    setTrainDate(date);
    setDeparture(departure);
    setArrival(arrival);
    setDepartureTime(departureTime);
    setArrivalTime(arriveTime);
  };

  return (
    <div>
      <header>
        <h1>台鐵時刻查詢</h1>
      </header>
      <Suspense fallback={<div>Get stations...</div>}>
        <SearchPanel onSearch={onSearch} />
      </Suspense>
      <Suspense fallback={<div>Get train details...</div>}>
        <TrainDetail
          departure={departure}
          arrival={arrival}
          trainDate={trainDate}
        />
      </Suspense>
    </div>
  );
};

export default TRA;
