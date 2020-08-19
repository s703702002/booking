import * as React from 'react';
import useSWR from 'swr';
import { format, add } from 'date-fns';

import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { TimeSelect } from 'components/Select';
import { swrConfig, fetcher } from 'apis/config';
import { getClosestStation } from 'utils';
import useGeoLocation from 'hooks/useGeoLocation';

import TrainTypeSelect from './components/TrainTypeSelect';
import option from './components/TrainTypeSelect/TrainTypesSelect';

const { useState } = React;

const Option = (option: any) => {
  return (
    <>
      {option.icon && (
        <LocationOnIcon color="primary" style={{ marginRight: 8 }} />
      )}
      {option.StationName.Zh_tw + ' ' + option.StationName.En}
    </>
  );
};

interface panelValue {
  date: string;
  departure: any;
  arrival: any;
  departureTime: string;
  arrivalTime: string;
  trainType: any;
}

interface Props {
  onSearch({
    date,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    trainType
  }: panelValue): void;
}

const types: Array<option> = [
  { text: '不限', value: '0' },
  { text: '太魯閣', value: '1' },
  { text: '普悠瑪', value: '2' },
  { text: '自強', value: '3' },
  { text: '莒光', value: '4' },
  { text: '復興', value: '5' },
  { text: '區間', value: '6' },
  { text: '普快', value: '7' }
];

const SearchPanel = ({ onSearch }: Props) => {
  const [date, setDate] = useState(format(Date.now(), 'yyyy-MM-dd'));
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [departureTime, setDepartureTime] = useState(
    format(Date.now(), 'HH:00')
  );
  const [arrivalTime, setArriveTime] = useState(
    format(add(Date.now(), { hours: 3 }), 'HH:00')
  );
  const [trainType, setTrainType] = useState<(string | option)[]>([types[0]]);
  const location = useGeoLocation();

  // GET 取得車站基本資料
  const { data } = useSWR(
    '/v2/Rail/TRA/Station?$top=500&$format=JSON',
    fetcher,
    swrConfig
  );

  // 過濾掉 台北-環島站
  const filteredData = data
    ? data.filter((v: any) => v.StationID !== '1001')
    : [];

  const closestStation = getClosestStation(location, filteredData);

  const stations = filteredData
    ? [closestStation, ...filteredData].filter((v) => v !== null)
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
      arrivalTime,
      trainType
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
              onChange={(e) => setDate(e.currentTarget.value)}
              variant="outlined"
              label="日期"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <Autocomplete
              id="OrginStation"
              options={stations}
              onChange={(e, v) => setDeparture(v)}
              value={departure}
              renderInput={(params) => (
                <TextField {...params} label="起站" variant="outlined" />
              )}
              renderOption={Option}
              getOptionLabel={({ StationName }) =>
                StationName.Zh_tw + ' ' + StationName.En
              }
              getOptionSelected={(o, v) => o.StationUID === v.StationUID}
              getOptionDisabled={(o) => o.disabled}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
              style={{ width: 150, margin: '0 auto' }}
              size="small"
              variant="contained"
              color="primary"
              onClick={depArrSwitch}
            >
              起迄站交換
            </Button>
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <Autocomplete
              id="DestinationStation"
              options={stations}
              onChange={(e, v) => setArrival(v)}
              value={arrival}
              renderInput={(params) => (
                <TextField {...params} label="迄站" variant="outlined" />
              )}
              renderOption={Option}
              getOptionLabel={(option) =>
                option.StationName.Zh_tw + ' ' + option.StationName.En
              }
              getOptionSelected={(o, v) => o.StationUID === v.StationUID}
              getOptionDisabled={(o) => o.disabled}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel id="DepartureTime">最早出發</InputLabel>
            <TimeSelect
              label="最早出發"
              labelId="DepartureTime"
              value={departureTime}
              onChange={(e: any) => setDepartureTime(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel id="ArrivalTime">最晚抵達</InputLabel>
            <TimeSelect
              label="最晚抵達"
              labelId="ArrivalTime"
              value={arrivalTime}
              onChange={(e: any) => setArriveTime(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <TrainTypeSelect
              id="trainType"
              defaultValue={trainType}
              onChange={(e, v) => setTrainType(v)}
              options={types}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="列車種類" />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
              disabled={!departure || !arrival || trainType.length < 1}
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
