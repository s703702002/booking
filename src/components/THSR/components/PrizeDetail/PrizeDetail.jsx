import React from "react";
import useSWR from "swr";

import styled from "styled-components";
import { fetcher } from "apis/THSR";
import { swrConfig } from "apis/config";

const StyledTable = styled.table`
  width: 100%;
  background-color: #aeeff9;
  th,
  td {
    padding: 0.3em;
  }
`;

const PrizeDetail = ({ departure, arrival }) => {
  const shouldFetch = departure && arrival;

  // GET 取得指定[起訖站間]之票價資料
  const { data } = useSWR(
    () => shouldFetch && `/v2/Rail/THSR/ODFare/${departure}/to/${arrival}`,
    fetcher,
    swrConfig
  );

  const prizeList = data ? data[0].Fares : [];

  if (prizeList.length < 1) return null;

  const departureStation =
    data[0].OriginStationName.Zh_tw + data[0].OriginStationName.En;
  const arrivalStation =
    data[0].DestinationStationName.Zh_tw + data[0].DestinationStationName.En;

  return (
    <div className="mt-3 mb-3">
      <h3>票價資訊</h3>
      <StyledTable>
        <thead>
          <tr>
            <th colSpan="3">
              {departureStation}
              <span className="ml-2 mr-2">&rarr;</span>
              {arrivalStation}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {prizeList.map(v => (
              <td key={v.Price}>
                {v.TicketType}:<strong>&#36;{v.Price}</strong>
              </td>
            ))}
          </tr>
        </tbody>
      </StyledTable>
    </div>
  );
};

export default PrizeDetail;
