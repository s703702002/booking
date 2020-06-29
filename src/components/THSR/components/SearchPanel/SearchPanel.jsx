import React, { useState } from "react";
import useSWR from "swr";
import { format, add } from "date-fns";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import Select, { TimeSelect } from "components/Select";
import { swrConfig } from "apis/config";
import { fetcher } from "apis/THSR";

const SearchPanel = ({ onSearch, className }) => {
  const [date, setDate] = useState(format(Date.now(), "yyyy-MM-dd"));
  const [departure, setDeparture] = useState("1000"); // 台北
  const [arrival, setArrival] = useState("1070"); // 左營
  const [departureTime, setDepartureTime] = useState(
    format(Date.now(), "HH:00")
  );
  const [arrivalTime, setArriveTime] = useState(
    format(add(Date.now(), { hours: 3 }), "HH:00")
  );

  // GET 取得車站基本資料
  const { data } = useSWR("/v2/Rail/THSR/Station", fetcher, swrConfig);

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
    <Box my={2}>
      <Paper>
        <Container>
          <FormControl margin="normal" fullWidth>
            <TextField
              type="date"
              id="trip-start"
              value={date}
              onChange={e => setDate(e.currentTarget.value)}
              variant="outlined"
              label="日期"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel id="OrginStation">起站</InputLabel>
            <Select
              label="起站"
              labelId="OrginStation"
              options={stations}
              value={departure}
              onChange={e => setDeparture(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal">
            <Button variant="contained" color="primary" onClick={depArrSwitch}>
              起迄站交換
            </Button>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="DestinationStation">迄站</InputLabel>
            <Select
              label="迄站"
              labelId="DestinationStation"
              options={stations}
              value={arrival}
              onChange={e => setArrival(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel id="DepartureTime">最早出發</InputLabel>
            <TimeSelect
              label="最早出發"
              labelId="DepartureTime"
              value={departureTime}
              onChange={e => setDepartureTime(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel id="ArrivalTime">最晚抵達</InputLabel>
            <TimeSelect
              label="最晚抵達"
              labelId="ArrivalTime"
              value={arrivalTime}
              onChange={e => setArriveTime(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={handleSearch}
              disabled={!departure || !arrival}
            >
              查詢
            </Button>
          </FormControl>
        </Container>
      </Paper>
    </Box>
  );
};

export default SearchPanel;
