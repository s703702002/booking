import React from 'react'
import styled from 'styled-components'
import { minsToTimes, timesToMins } from '../utils'
import { Desc, Asc } from "./Icons";

const StyledTable = styled.table`
  width: 100%;
  box-shadow: 0px 3px 10px #ddd;
  thead {
    background-color: #eee;
  }
  td {
    padding: .3em;
    vertical-align: middle;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
`;

const StyledTh = styled.th`
  padding: .3em;
  vertical-align: middle;
  font-weight: bold;
  cursor: ${props => props.pointer ? 'pointer' : 'initial'};
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
      <td className="text-info font-weight-bold">{TrainNo}</td>
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
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>車次</StyledTh>
          <StyledTh
            pointer
            onClick={onClickDepartureSort}
          >
            發車
            {sortByDeparture === "desc" ? <Desc /> : <Asc />}
          </StyledTh>
          <StyledTh
            pointer
            onClick={onClickArrivalSort}
          >
            到達
            {sortByArrival === "desc" ? <Desc /> : <Asc />}
          </StyledTh>
          <StyledTh>總時程</StyledTh>
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
    </StyledTable>
  )
})

export default ResultTable