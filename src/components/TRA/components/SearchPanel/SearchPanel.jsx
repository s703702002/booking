import React, { useState } from "react";

import useSWR from "swr";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";

import { swrConfig } from "apis/config";
import { fetcher } from "apis/TRA";
import { formatDate } from "utils";

const SearchForm = ({ onSearch }) => {
  const [date, setDate] = useState(formatDate(Date.now()));
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

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
      arrival
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
          </FormControl>
          <FormControl margin="normal">
            <Button variant="contained" color="primary" onClick={depArrSwitch}>
              起迄站交換
            </Button>
          </FormControl>
          <FormControl fullWidth variant="outlined">
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
          </FormControl>
          <FormControl fullWidth margin="normal">
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
          </FormControl>
        </Container>
      </Paper>
    </Box>
  );
};

export default SearchForm;
