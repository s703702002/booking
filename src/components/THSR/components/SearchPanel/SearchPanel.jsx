import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { Row, Label, FormField } from "components/Grid";
import Select, { TimeSelect } from "components/Select";
import { fetcher } from "apis/THSR";
import { formatDate, getDefaultHour } from "utils";

const Container = styled.div`
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

const { defaultDepTime, defaultArrTime } = getDefaultHour();

const SearchForm = ({ onSearch, className }) => {
  const [date, setDate] = useState(formatDate(Date.now()));
  const [departure, setDeparture] = useState("1000"); // 台北
  const [arrival, setArrival] = useState("1070"); // 左營
  const [departureTime, setDepartureTime] = useState(defaultDepTime);
  const [arrivalTime, setArriveTime] = useState(defaultArrTime);

  // GET 取得車站基本資料
  const { data } = useSWR("/v2/Rail/THSR/Station", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

  const stations = data
    ? data.map(val => ({
        value: val.StationID,
        ...val.StationName
      }))
    : [];

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
      arrivalTime
    });

  return (
    <Container>
      <div className="container">
        <Row>
          <Label htmlFor="trip-start">日期</Label>
          <FormField>
            <TextField
              type="date"
              id="trip-start"
              value={date}
              onChange={e => setDate(e.currentTarget.value)}
              fullWidth
              variant="outlined"
            />
          </FormField>
        </Row>
        <Row>
          <Label htmlFor="OrginStation">起站</Label>
          <FormField>
            <Select
              name="OrginStation"
              id="OrginStation"
              options={stations}
              value={departure}
              onChange={e => setDeparture(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </FormField>
        </Row>
        <div className="row justify-content-center form-group">
          <Button variant="contained" color="primary" onClick={depArrSwitch}>
            起迄站交換
          </Button>
        </div>
        <Row>
          <Label htmlFor="DestinationStation">迄站</Label>
          <FormField>
            <Select
              name="DestinationStation"
              id="DestinationStation"
              options={stations}
              value={arrival}
              onChange={e => setArrival(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </FormField>
        </Row>
        <Row>
          <Label htmlFor="DepartureTime">最早出發</Label>
          <FormField>
            <TimeSelect
              name="DepartureTime"
              id="DepartureTime"
              value={departureTime}
              onChange={e => setDepartureTime(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </FormField>
        </Row>
        <Row>
          <Label htmlFor="ArriveTime">最晚抵達</Label>
          <FormField>
            <TimeSelect
              name="ArriveTime"
              id="ArriveTime"
              value={arrivalTime}
              onChange={e => setArriveTime(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </FormField>
        </Row>
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
          disabled={!departure || !arrival}
        >
          查詢
        </Button>
      </div>
    </Container>
  );
};

export default SearchForm;
