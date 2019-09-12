import styled from 'styled-components'

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

export default ResultTable