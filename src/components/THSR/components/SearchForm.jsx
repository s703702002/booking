import React, { useState } from "react";
import styled from "styled-components";
import { Row, Label, FormField } from "components/Grid";
import Select, { TimeSelect } from "components/Select";
import { getStations } from "apis";
import { formatDate, getDefaultHour } from "utils";
import useDidMount from "hooks/useDidMount";

const { defaultDepTime, defaultArrTime } = getDefaultHour();

const SearchForm = ({ onSearch, departureRef, arrivalRef, className }) => {
  const [stationOptions, setStationOptions] = useState([]);
  const [date, setDate] = useState(formatDate(Date.now()));
  const [departure, setDeparture] = useState("1000"); // 台北
  const [arrival, setArrival] = useState("1070"); // 左營
  const [departureTime, setDepartureTime] = useState(defaultDepTime);
  const [arriveTime, setArriveTime] = useState(defaultArrTime);

  const depArrSwitch = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  const handleSearch = () =>
    onSearch({
      date,
      departure,
      arrival,
      departureTime,
      arriveTime
    });

  useDidMount(() => {
    getStations()
      .then(res => res.json())
      .then(data => {
        const stations = data.map(val => ({
          value: val.StationID,
          ...val.StationName
        }));
        setStationOptions(stations);
      })
      .catch(err => console.log(err));
  });

  return (
    <div className={`container ${className}`}>
      <Row>
        <Label htmlFor="trip-start">日期</Label>
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
        <Label htmlFor="OrginStation">起站</Label>
        <FormField>
          <Select
            className="form-control"
            name="OrginStation"
            id="OrginStation"
            options={stationOptions}
            value={departure}
            onChange={e => setDeparture(e.currentTarget.value)}
            ref={departureRef}
          />
        </FormField>
      </Row>
      <div className="row justify-content-center form-group">
        <button
          onClick={depArrSwitch}
          type="button"
          className="btn btn-outline-primary"
        >
          起迄站交換
        </button>
      </div>
      <Row>
        <Label htmlFor="DestinationStation">迄站</Label>
        <FormField>
          <Select
            className="form-control"
            name="DestinationStation"
            id="DestinationStation"
            options={stationOptions}
            value={arrival}
            onChange={e => setArrival(e.currentTarget.value)}
            ref={arrivalRef}
          />
        </FormField>
      </Row>
      <Row>
        <Label htmlFor="DepartureTime">最早出發</Label>
        <FormField>
          <TimeSelect
            className="form-control"
            name="DepartureTime"
            id="DepartureTime"
            value={departureTime}
            onChange={e => setDepartureTime(e.target.value)}
          />
        </FormField>
      </Row>
      <Row>
        <Label htmlFor="ArriveTime">最晚抵達</Label>
        <FormField>
          <TimeSelect
            className="form-control"
            name="ArriveTime"
            id="ArriveTime"
            value={arriveTime}
            onChange={e => setArriveTime(e.target.value)}
          />
        </FormField>
      </Row>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleSearch}
      >
        查詢
      </button>
    </div>
  );
};

const StyledSeachForm = styled(SearchForm)`
  box-shadow: 1px 1px 5px #ddd;
  background-color: #f3f3f3;
  border-color: #ddd;
  color: #333;
  text-shadow: 0 1px 0 #eee;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  .col-form-label {
    max-width: 7em;
  }
`;

export default StyledSeachForm;
