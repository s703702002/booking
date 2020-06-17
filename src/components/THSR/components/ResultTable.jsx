import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowsAltH, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { minsToTimes, timesToMins } from "utils";

const StyledTable = styled.table`
  width: 100%;
  box-shadow: 0px 3px 10px #ddd;
  thead {
    background-color: #eee;
  }
  td {
    padding: 0.3em;
    vertical-align: middle;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
`;

const StyledTh = styled.th`
  padding: 0.3em;
  vertical-align: middle;
  font-weight: bold;
  cursor: ${props => (props.pointer ? "pointer" : "initial")};
  > span {
    display: inline-block;
    margin-right: 2px;
    vertical-align: middle;
  }
`;

export const ResultRow = React.memo(
  ({ TrainNo, DepartureTime, ArrivalTime }) => {
    const Dmins = timesToMins(DepartureTime);
    const Amins = timesToMins(ArrivalTime);
    return (
      <tr>
        <td className="text-info font-weight-bold">{TrainNo}</td>
        <td>{DepartureTime}</td>
        <td>{ArrivalTime}</td>
        <td>{minsToTimes(Amins - Dmins)}</td>
      </tr>
    );
  }
);

export const EmptyRow = () => (
  <tr>
    <td colSpan="4">尚無資料</td>
  </tr>
);

const ResultTable = ({ resultList }) => {
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState();

  const onClickDepartureSort = () => {
    setSortBy("departure");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const onClickArrivalSort = () => {
    setSortBy("arrival");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const renderList = resultList.sort((a, b) => {
    if (sortBy === "departure") {
      const aDepTimeMins = timesToMins(a.OriginStopTime.DepartureTime);
      const bDepTimeMins = timesToMins(b.OriginStopTime.DepartureTime);

      return order === "desc"
        ? bDepTimeMins - aDepTimeMins
        : aDepTimeMins - bDepTimeMins;
    } else if (sortBy === "arrival") {
      const aArrTimeMins = timesToMins(a.DestinationStopTime.ArrivalTime);
      const bArrTimeMins = timesToMins(b.DestinationStopTime.ArrivalTime);

      return order === "desc"
        ? bArrTimeMins - aArrTimeMins
        : aArrTimeMins - bArrTimeMins;
    } else {
      return true;
    }
  });

  function renderIcon() {
    return order === "desc" ? <FaArrowDown /> : <FaArrowUp />;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>車次</StyledTh>
          <StyledTh pointer onClick={onClickDepartureSort}>
            <span>發車</span>
            {sortBy === "departure" ? renderIcon() : <FaArrowsAltH />}
          </StyledTh>
          <StyledTh pointer onClick={onClickArrivalSort}>
            <span>到達</span>
            {sortBy === "arrival" ? renderIcon() : <FaArrowsAltH />}
          </StyledTh>
          <StyledTh>總時程</StyledTh>
        </tr>
      </thead>
      <tbody>
        {renderList.length > 0 ? (
          renderList.map(val => (
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
  );
};

export default ResultTable;
