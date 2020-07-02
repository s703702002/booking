import React, { Suspense, useState } from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import SearchPanel from './components/SearchPanel';
import TrainDetail from './components/TrainDetail';
import Context from './context';

const TRA = () => {
  const [trainDate, setTrainDate] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [trainType, setTrainType] = useState([]);

  const onSearch = ({
    date,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    trainType
  }) => {
    setTrainDate(date);
    setDeparture(departure);
    setArrival(arrival);
    setDepartureTime(departureTime);
    setArrivalTime(arrivalTime);
    setTrainType(trainType);
  };

  return (
    <Box paddingBottom={8}>
      <Typography align="center" variant="h3">
        台鐵時刻查詢
      </Typography>
      <Suspense fallback={<div>Get stations...</div>}>
        <SearchPanel onSearch={onSearch} />
      </Suspense>
      <Context.Provider value={{ trainDate, departure, arrival }}>
        <Suspense fallback={<div>Get train details...</div>}>
          <TrainDetail
            departure={departure}
            arrival={arrival}
            trainDate={trainDate}
            departureTime={departureTime}
            arrivalTime={arrivalTime}
            trainType={trainType}
          />
        </Suspense>
      </Context.Provider>
    </Box>
  );
};

export default TRA;
