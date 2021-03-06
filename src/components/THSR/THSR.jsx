import React, { useState, Suspense } from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import ErrorBoundary from 'components/ErrorBoundary';
import TrainDetail from './components/TrainDetail';
import PrizeDetail from './components/PrizeDetail';
import SearchPanel from './components/SearchPanel';

const ErrorFallBack = (
  <Typography align="center" variant="h6" color="error">
    很抱歉，系統忙碌中
  </Typography>
);

const THSR = () => {
  const [trainDate, setTrainDate] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const searchClick = ({
    date,
    departure,
    arrival,
    departureTime,
    arrivalTime
  }) => {
    setTrainDate(date);
    setDeparture(departure);
    setArrival(arrival);
    setDepartureTime(departureTime);
    setArrivalTime(arrivalTime);
  };

  return (
    <Box paddingBottom={8}>
      <Typography align="center" variant="h3">
        高鐵時刻查詢
      </Typography>
      <Suspense fallback={<div>Get stations...</div>}>
        <SearchPanel onSearch={searchClick} />
      </Suspense>
      <Suspense fallback={<div>Get train details...</div>}>
        <TrainDetail
          departure={departure}
          arrival={arrival}
          trainDate={trainDate}
          departureTime={departureTime}
          arrivalTime={arrivalTime}
        />
      </Suspense>
      <ErrorBoundary fallback={ErrorFallBack}>
        <Suspense fallback={<div>Get prize detail...</div>}>
          <PrizeDetail departure={departure} arrival={arrival} />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default THSR;
