import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Label, FormField } from "./Grid";
import Select, { TimeSelect } from "./Select";
import { getStations } from "../apis";
import { formatDate, getDefaultHour } from "../utils";

const { defaultDepTime, defaultArrTime } = getDefaultHour();

export function useSearchForm() {
  const [date, setDate] = useState(formatDate(Date.now()));
  const [departure, setDeparture] = useState("1000"); // 台北
  const [arrival, setArrival] = useState("1070"); // 左營
  const [departureTime, setDepartureTime] = useState(defaultDepTime);
  const [arriveTime, setArriveTime] = useState(defaultArrTime);

  return {
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
  };
}

const SearchForm = React.memo(
  ({
    date,
    onChangeDate,
    departure,
    onChangeDeparture,
    DepArrChange,
    arrival,
    onChangeArrival,
    departureTime,
    arriveTime,
    changeTime,
    onSearch,
    departureRef,
    arrivalRef,
    className
  }) => {
    const [stationOptions, setStationOptions] = useState([]);
    useEffect(() => {
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
    }, []);
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
              onChange={onChangeDate}
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
              onChange={onChangeDeparture}
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
          <Label htmlFor="DestinationStation">迄站</Label>
          <FormField>
            <Select
              className="form-control"
              name="DestinationStation"
              id="DestinationStation"
              options={stationOptions}
              value={arrival}
              onChange={onChangeArrival}
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
              onChange={changeTime}
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
              onChange={changeTime}
            />
          </FormField>
        </Row>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={onSearch}
        >
          查詢
        </button>
      </div>
    );
  }
);

SearchForm.propTypes = {
  date: PropTypes.string,
  onChangeDate: PropTypes.func,
  departure: PropTypes.string,
  onChangeDeparture: PropTypes.func,
  DepArrChange: PropTypes.func,
  arrival: PropTypes.string,
  onChangeArrival: PropTypes.func,
  departureTime: PropTypes.string,
  arriveTime: PropTypes.string,
  changeTime: PropTypes.func,
  onSearch: PropTypes.func
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
