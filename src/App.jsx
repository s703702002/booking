import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import Select from "./Select";
import { Row, Label, FormField } from "./Grid";
import { formatDate } from "./utils";
import { Desc, Asc } from "./Icons";

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_DailyTimetable
const API_BASE = "https://ptx.transportdata.tw/MOTC";
// const API_TODAY = '/v2/Rail/THSR/DailyTimetable/Today' // GET 取得當天所有車次的時刻表資料

const fetchOptions = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
  }
};

function searchTrain(OriginStationID, DestinationStationID, TrainDate) {
  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const API_TRAIN = `/v2/Rail/THSR/DailyTimetable/OD/${OriginStationID}/to/${DestinationStationID}/${TrainDate}`;
  return fetch(API_BASE + API_TRAIN, fetchOptions);
}

function searchPriceByStation(OriginStationID, DestinationStationID) {
  // GET 取得指定[起訖站間]之票價資料
  const API_PRICE = `/v2/Rail/THSR/ODFare/${OriginStationID}/to/${DestinationStationID}`;
  return fetch(API_BASE + API_PRICE, fetchOptions);
}

function getODFARE() {
  const API_ODFARE = "/v2/Rail/THSR/ODFare"; // GET 取得票價資料
  return fetch(API_BASE + API_ODFARE, fetchOptions);
}

function App() {
  const [updateTime, setUpdateTime] = useState("");
  const [stationOptions, setStationOptions] = useState([]);
  const [date, setDate] = useState(formatDate(Date.now()));
  const [sortByDeparture, setDeaprtureState] = useState("desc");
  const [sortByArrival, setArrivalState] = useState("desc");
  const [departure, setDeparture] = useState("1000"); // 台北
  const [arrival, setArrival] = useState("1070"); // 左營
  const departureRef = useRef();
  const arrivalRef = useRef();
  const [resultList, setResultList] = useState([]);
  const [prizeList, setPrizeList] = useState([]);

  const changeDeparture = useCallback(
    e => setDeparture(e.currentTarget.value),
    [setDeparture]
  );

  const changeArrival = useCallback(e => setArrival(e.currentTarget.value), [
    setArrival
  ]);

  const DepArrChange = useCallback(() => {
    const currentD = departure;
    const currentA = arrival;
    setDeparture(currentA);
    setArrival(currentD);
  }, [departure, arrival]);

  useEffect(() => {
    getODFARE()
      .then(res => res.json())
      .then(data => {
        const stations = {};
        data.forEach(element => {
          const stationsId = element.OriginStationID;
          if (!stations[stationsId]) {
            stations[stationsId] = element.OriginStationName;
          }
        });
        setStationOptions(
          Object.entries(stations).map(e => ({
            value: e[0],
            ...e[1]
          }))
        );
        setUpdateTime(data[0].UpdateTime);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, []);
  console.log("prizeList", prizeList);
  return (
    <div className="App">
      <header>
        <h1>高鐵查詢系統</h1>
      </header>
      <div className="search_panel container">
        <Row>
          <Label htmlFor="trip-start">日期:</Label>
          <FormField>
            <input
              className="form-control"
              type="date"
              id="trip-start"
              value={date}
              onChange={e => setDate(e.currentTarget.value)}
            />
          </FormField>
        </Row>
        <Row>
          <Label htmlFor="OrginStation">起站:</Label>
          <FormField>
            <Select
              className="form-control"
              name="OrginStation"
              id="OrginStation"
              options={stationOptions}
              value={departure}
              onChange={changeDeparture}
              ref={departureRef}
            />
          </FormField>
        </Row>
        <div className="row justify-content-center form-group">
          <button
            onClick={DepArrChange}
            type="button"
            className="btn btn-outline-primary"
          >
            起迄站交換
          </button>
        </div>
        <Row>
          <Label htmlFor="DestinationStation">迄站:</Label>
          <FormField>
            <Select
              className="form-control"
              name="DestinationStation"
              id="DestinationStation"
              options={stationOptions}
              value={arrival}
              onChange={changeArrival}
              ref={arrivalRef}
            />
          </FormField>
        </Row>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            searchTrain(departure, arrival, date)
              .then(res => res.json())
              .then(data => {
                console.log("data", data);
              })
              .catch(err => console.log(err));
            searchPriceByStation(departure, arrival)
              .then(res => res.json())
              .then(data => setPrizeList(data[0].Fares))
              .catch(err => console.log(err));
          }}
        >
          查詢
        </button>
      </div>
      <div className="container">
        <table className="result_table">
          <thead>
            <tr>
              <td>車次</td>
              <td>起迄站</td>
              <td
                className="pointer"
                onClick={() =>
                  setDeaprtureState(sortByDeparture === "desc" ? "asc" : "desc")
                }
              >
                發車
                {sortByDeparture === "desc" ? <Desc /> : <Asc />}
              </td>
              <td
                className="pointer"
                onClick={() =>
                  setArrivalState(sortByArrival === "desc" ? "asc" : "desc")
                }
              >
                到達
                {sortByArrival === "desc" ? <Desc /> : <Asc />}
              </td>
              <td>總時程</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        {!resultList.length && <p>尚無資料</p>}
        <div>
          <h3>票價資訊</h3>
          {prizeList.length > 0 ? (
            <table className="prize_table">
              <thead>
                <tr>
                  <th colSpan="3">
                    {departureRef.current.selectedOptions[0].textContent}
                    <span className="ml-2 mr-2">&rarr;</span>
                    {arrivalRef.current.selectedOptions[0].textContent}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {prizeList.map(v => (
                    <td key={v.Price}>
                      {v.TicketType}:<strong>&#36;{v.Price}</strong>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
      <footer>
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  );
}

export default App;
