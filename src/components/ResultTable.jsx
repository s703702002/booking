import React from 'react'
import styled from 'styled-components'
import { minsToTimes, timesToMins } from '../utils'

const ResultTable = styled.table`
  width: 100%;
  thead {
    background-color: #eee;
  }
  th,td {
    padding: .3em;
    vertical-align: middle;
  }
  th {
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
`;

export const ResultRow = React.memo(({
  TrainNo,
  DepartureTime,
  ArrivalTime
}) => {
  console.log('ResultRow render')
  const Dmins = timesToMins(DepartureTime)
  const Amins = timesToMins(ArrivalTime)
  return (
    <tr>
      <td>{TrainNo}</td>
      <td>{DepartureTime}</td>
      <td>{ArrivalTime}</td>
      <td>{minsToTimes(Amins - Dmins)}</td>
    </tr>
  )
})

export const EmptyRow = () => (
  <tr>
    <td colSpan="4">尚無資料</td>
  </tr>
)

export default ResultTable