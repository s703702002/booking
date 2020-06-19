import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Row, Label, FormField } from "components/Grid";
import { TimeSelect } from "components/Select";

import { swrConfig } from "apis/config";
import { fetcher } from "apis/TRA";
import { formatDate, getDefaultHour } from "utils";

const { defaultDepTime, defaultArrTime } = getDefaultHour();

const SearchForm = ({ onSearch, className }) => {
  const [date, setDate] = useState(formatDate(Date.now()));
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [departureTime, setDepartureTime] = useState(defaultDepTime);
  const [arriveTime, setArriveTime] = useState(defaultArrTime);

  // GET 取得車站基本資料
  const { data } = useSWR(
    "/v2/Rail/TRA/Station?$top=500&$format=JSON",
    fetcher,
    swrConfig
  );

  const stations = data ? data : [];

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

  return (
    <div className={`container ${className}`}>
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
          <Autocomplete
            name="OrginStation"
            id="OrginStation"
            options={stations}
            onChange={(e, v) => setDeparture(v)}
            value={departure}
            renderInput={params => (
              <TextField {...params} label="起站" variant="outlined" />
            )}
            getOptionLabel={option =>
              option.StationName.Zh_tw + " " + option.StationName.En
            }
            getOptionSelected={(o, v) => o.StationUID === v.StationUID}
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
          <Autocomplete
            name="DestinationStation"
            id="DestinationStation"
            options={stations}
            onChange={(e, v) => setArrival(v)}
            value={arrival}
            renderInput={params => (
              <TextField {...params} label="迄站" variant="outlined" />
            )}
            getOptionLabel={option =>
              option.StationName.Zh_tw + " " + option.StationName.En
            }
            getOptionSelected={(o, v) => o.StationUID === v.StationUID}
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
            value={arriveTime}
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
      >
        查詢
      </Button>
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
