import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  background-color: #aeeff9;
  th, td {
    padding: .3em;
  }
`;

const PrizeTable = ({ prizeList, departure, arrival }) => {
  return (
    <div className="mt-3 mb-3">
      <h3>票價資訊</h3>
      <StyledTable>
        <thead>
          <tr>
            <th colSpan="3">
              {departure}
              <span className="ml-2 mr-2">&rarr;</span>
              {arrival}
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
  )
}

export default PrizeTable;
