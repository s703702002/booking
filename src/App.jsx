import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import { searchTrain, searchPriceByStation } from "./apis";
import { timesToMins } from "./utils";

import ResultTable from "./components/ResultTable";
import PrizeTable from "./components/PrizeTable";

import StyledSeachForm, { useSearchForm } from "./components/SearchForm";

function App() {
  const [updateTime, setUpdateTime] = useState("");

  const {
    date,
    setDate,
    departure,
    setDeparture,
    arrival,
    setArrival,
    departureTime,
    setDepartureTime,
    arriveTime,
    setArriveTime
  } = useSearchForm();

  const departureRef = useRef();
  const arrivalRef = useRef();
  const [sortByDeparture, setDeaprtureState] = useState("desc");
  const [sortByArrival, setArrivalState] = useState("desc");
  const [resultList, setResultList] = useState([]);
  const [prizeList, setPrizeList] = useState([]);

  const changeDate = useCallback(e => setDate(e.currentTarget.value), [
    setDate
  ]);

  const changeStations = useCallback(
    e => {
      if (e.currentTarget.id === "OrginStation") {
        setDeparture(e.currentTarget.value);
      } else {
        setArrival(e.currentTarget.value);
      }
    },
    [setDeparture, setArrival]
  );

  const DepArrChange = useCallback(() => {
    setDeparture(arrival);
    setArrival(departure);
  }, [departure, arrival, setDeparture, setArrival]);

  const changeTime = useCallback(
    e => {
      if (e.currentTarget.id === "DepartureTime") {
        setDepartureTime(e.currentTarget.value);
      } else {
        setArriveTime(e.currentTarget.value);
      }
    },
    [setDepartureTime, setArriveTime]
  );

  const searchClick = useCallback(() => {
    searchTrain(departure, arrival, date)
      .then(res => res.json())
      .then(data => {
        const depFilterTime = timesToMins(departureTime);
        const arrFilterTime = timesToMins(arriveTime);
        const filteredData = data.filter(d => {
          const depTime = timesToMins(d.OriginStopTime.DepartureTime);
          const arrTime = timesToMins(d.DestinationStopTime.ArrivalTime);
          return depTime > depFilterTime && arrTime < arrFilterTime;
        });
        setResultList(filteredData);
        setUpdateTime(data[0].UpdateTime);
      })
      .catch(err => console.log(err));
    searchPriceByStation(departure, arrival)
      .then(res => res.json())
      .then(data => setPrizeList(data[0].Fares))
      .catch(err => console.log(err));
  }, [departure, arrival, date, departureTime, arriveTime]);

  const departureSortClick = useCallback(() => {
    setDeaprtureState(sortByDeparture === "desc" ? "asc" : "desc");
    resultList.sort((a, b) => {
      const aMins = timesToMins(a.OriginStopTime.DepartureTime);
      const bMins = timesToMins(b.OriginStopTime.DepartureTime);
      return sortByDeparture === "desc" ? aMins - bMins : bMins - aMins;
    });
  }, [sortByDeparture, resultList]);

  const arrivalSortClick = useCallback(() => {
    setArrivalState(sortByArrival === "desc" ? "asc" : "desc");
    resultList.sort((a, b) => {
      const aMins = timesToMins(a.DestinationStopTime.ArrivalTime);
      const bMins = timesToMins(b.DestinationStopTime.ArrivalTime);
      return sortByArrival === "desc" ? aMins - bMins : bMins - aMins;
    });
  }, [sortByArrival, resultList]);

  return (
    <div className="App">
      <header>
        <h1>高鐵查詢系統</h1>
      </header>
      <StyledSeachForm
        date={date}
        onChangeDate={changeDate}
        departure={departure}
        onChangeDeparture={changeStations}
        DepArrChange={DepArrChange}
        arrival={arrival}
        onChangeArrival={changeStations}
        departureTime={departureTime}
        arriveTime={arriveTime}
        changeTime={changeTime}
        onSearch={searchClick}
        departureRef={departureRef}
        arrivalRef={arrivalRef}
      />
      <div className="container">
        <ResultTable
          sortByDeparture={sortByDeparture}
          sortByArrival={sortByArrival}
          resultList={resultList}
          onClickDepartureSort={departureSortClick}
          onClickArrivalSort={arrivalSortClick}
        />
        {prizeList.length > 0 ? (
          <PrizeTable
            prizeList={prizeList}
            departure={departureRef.current.selectedOptions[0].textContent}
            arrival={arrivalRef.current.selectedOptions[0].textContent}
          />
        ) : null}
      </div>
      <footer className="fixed-bottom">
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  );
}

export default App;
