import React from 'react';
import useSWR from 'swr';

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { fetcher } from 'apis/config';
import { swrConfig } from 'apis/config';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

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
    <Box mt={2}>
      <Box mb={1}>
        <Typography align="center" variant="h4">
          票價資訊
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan="3">
                {departureStation}&nbsp;
                <ArrowRightAltIcon />
                &nbsp;{arrivalStation}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {prizeList.map(v => (
                <TableCell key={v.Price}>
                  {v.TicketType}: <strong>{v.Price}</strong> 元
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PrizeDetail;
