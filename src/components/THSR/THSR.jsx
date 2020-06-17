import React, { useState, Suspense } from "react";
import TrainDetail from "./components/TrainDetail";
import PrizeDetail from "./components/PrizeDetail";
import SearchPanel from "./components/SearchPanel";

const THSR = () => {
  const [trainDate, setTrainDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const searchClick = ({
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
        <h1>高鐵時刻查詢</h1>
      </header>
      <Suspense fallback={<div>Loading stations...</div>}>
        <SearchPanel onSearch={searchClick} />
      </Suspense>
      <div className="container">
        <Suspense fallback={<div>Get train details...</div>}>
          <TrainDetail
            departure={departure}
            arrival={arrival}
            trainDate={trainDate}
            departureTime={departureTime}
            arrivalTime={arrivalTime}
          />
        </Suspense>
        <Suspense fallback={<div>Get prize detail...</div>}>
          <PrizeDetail departure={departure} arrival={arrival} />
        </Suspense>
      </div>
    </div>
  );
};

export default THSR;
