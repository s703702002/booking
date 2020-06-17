import React, { useState, useRef, Suspense } from "react";
import { fetcher } from "apis/THSR";
import { timesToMins } from "utils";

import useSWR from "swr";

import ResultTable from "./components/ResultTable";
import PrizeTable from "./components/PrizeTable";
import SeachForm from "./components/SearchForm";

const THSR = () => {
  const departureRef = useRef();
  const arrivalRef = useRef();

  const [trainDate, setTrainDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const shouldFetch = departure && arrival && trainDate;

  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const { data } = useSWR(
    () =>
      shouldFetch &&
      `/v2/Rail/THSR/DailyTimetable/OD/${departure}/to/${arrival}/${trainDate}`,
    fetcher
  );

  // GET 取得指定[起訖站間]之票價資料
  const { data: prizeData } = useSWR(
    () => shouldFetch && `/v2/Rail/THSR/ODFare/${departure}/to/${arrival}`,
    fetcher
  );

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

  const depFilterTime = timesToMins(departureTime);
  const arrFilterTime = timesToMins(arrivalTime);

  const trains = data
    ? data.filter(d => {
        const depTime = timesToMins(d.OriginStopTime.DepartureTime);
        const arrTime = timesToMins(d.DestinationStopTime.ArrivalTime);
        return depTime > depFilterTime && arrTime < arrFilterTime;
      })
    : [];
  const prize = prizeData ? prizeData[0].Fares : [];
  const updateTime = data && data[0].UpdateTime;

  return (
    <div>
      <header>
        <h1>高鐵時刻查詢</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <SeachForm
          onSearch={searchClick}
          departureRef={departureRef}
          arrivalRef={arrivalRef}
        />
      </Suspense>
      <div className="container">
        <ResultTable resultList={trains} />
        {prize.length > 0 && (
          <PrizeTable
            prizeList={prize}
            departure={departureRef.current.selectedOptions[0].textContent}
            arrival={arrivalRef.current.selectedOptions[0].textContent}
          />
        )}
      </div>
      <footer className="fixed-bottom">
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  );
};

export default THSR;
