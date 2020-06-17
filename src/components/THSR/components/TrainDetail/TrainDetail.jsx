import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowsAltH, FaArrowDown, FaArrowUp } from "react-icons/fa";
import useSWR from "swr";
import { fetcher } from "apis/THSR";
import { timesToMins } from "utils";

import Row, { NoResults } from "./components/Row";

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

const TrainDetail = ({
  departure,
  arrival,
  trainDate,
  departureTime,
  arrivalTime
}) => {
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState();

  const shouldFetch = departure && arrival && trainDate;

  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const { data } = useSWR(
    () =>
      shouldFetch &&
      `/v2/Rail/THSR/DailyTimetable/OD/${departure}/to/${arrival}/${trainDate}`,
    fetcher,
    { suspense: true }
  );

  const depFilterTime = timesToMins(departureTime);
  const arrFilterTime = timesToMins(arrivalTime);

  const trainDetails = data
    ? data.filter(d => {
        const depTime = timesToMins(d.OriginStopTime.DepartureTime);
        const arrTime = timesToMins(d.DestinationStopTime.ArrivalTime);
        return depTime > depFilterTime && arrTime < arrFilterTime;
      })
    : [];

  if (trainDetails.length < 1) return null;

  const onClickDepartureSort = () => {
    setSortBy("departure");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const onClickArrivalSort = () => {
    setSortBy("arrival");
    setOrder(order === "desc" ? "asc" : "desc");
  };

  const renderList = trainDetails.sort((a, b) => {
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
    <div>
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
            renderList.map(detail => (
              <Row key={detail.DailyTrainInfo.TrainNo} detail={detail} />
            ))
          ) : (
            <NoResults />
          )}
        </tbody>
      </StyledTable>
      <footer className="fixed-bottom">
        <p>更新時間: {data[0].UpdateTime}</p>
      </footer>
    </div>
  );
};

export default TrainDetail;
