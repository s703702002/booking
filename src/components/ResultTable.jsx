import React from 'react'
import styled from 'styled-components'
import { minsToTimes, timesToMins } from '../utils'
import { Desc, Asc } from "./Icons";

const Table = styled.table`
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

const ResultTable = React.memo(({
  sortByDeparture,
  sortByArrival,
  resultList,
  onClickDepartureSort,
  onClickArrivalSort
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>車次</th>
          <th
            className="pointer"
            onClick={onClickDepartureSort}
          >
            發車
            {sortByDeparture === "desc" ? <Desc /> : <Asc />}
          </th>
          <th
            className="pointer"
            onClick={onClickArrivalSort}
          >
            到達
            {sortByArrival === "desc" ? <Desc /> : <Asc />}
          </th>
          <th>總時程</th>
        </tr>
      </thead>
      <tbody>
        {resultList.length > 0 ? (
          resultList.map(val => (
            <ResultRow
              key={val.DailyTrainInfo.TrainNo}
              TrainNo={val.DailyTrainInfo.TrainNo}
              DepartureTime={val.OriginStopTime.DepartureTime}
              ArrivalTime={val.DestinationStopTime.ArrivalTime}
            />
          ))
        ) : (
          <EmptyRow />
        )}
      </tbody>
    </Table>
  )
})

export default ResultTable