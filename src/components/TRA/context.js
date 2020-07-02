import React from 'react';

const formContext = React.createContext({
  trainDate: '',
  departure: '',
  arrival: '',
  departureTime: '',
  arrivalTime: ''
});

export default formContext;
