import * as React from 'react';
import useSWR from 'swr';
import { parseISO, isBefore, isAfter, compareAsc, compareDesc } from 'date-fns';

import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { swrConfig, fetcher } from 'apis/config';
import APIResponse from 'apis/api';

import SortIcon from 'components/SortIcon';
import BottomFooter from 'components/BottomFooter';

import Row, { NoResults } from './components/Row';

const { useState } = React;

interface Props {
  departure: string;
  arrival: string;
  trainDate: string;
  departureTime: string;
  arrivalTime: string;
}

type sortBy = 'departure' | 'arrival';
type order = 'desc' | 'asc';

const TrainDetail = ({
  departure,
  arrival,
  trainDate,
  departureTime,
  arrivalTime
}: Props) => {
  const [sortBy, setSortBy] = useState<sortBy>('departure');
  const [order, setOrder] = useState<order>('desc');

  const shouldFetch = departure && arrival && trainDate;

  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const { data } = useSWR<APIResponse[]>(
    () =>
      shouldFetch &&
      `/v2/Rail/THSR/DailyTimetable/OD/${departure}/to/${arrival}/${trainDate}`,
    fetcher,
    swrConfig
  );

  const depFilterTime = parseISO(`${trainDate} ${departureTime}`);
  const arrFilterTime = parseISO(`${trainDate} ${arrivalTime}`);

  const trainDetails = data
    ? data.filter((d) => {
        const depTime = parseISO(
          `${trainDate} ${d.OriginStopTime.DepartureTime}`
        );
        const arrTime = parseISO(
          `${trainDate} ${d.DestinationStopTime.ArrivalTime}`
        );
        return (
          isAfter(depTime, depFilterTime) && isBefore(arrTime, arrFilterTime)
        );
      })
    : [];

  const onClickDepartureSort = () => {
    setSortBy('departure');
    setOrder(order === 'desc' ? 'asc' : 'desc');
  };

  const onClickArrivalSort = () => {
    setSortBy('arrival');
    setOrder(order === 'desc' ? 'asc' : 'desc');
  };

  const renderList = trainDetails.sort((a, b) => {
    if (sortBy === 'departure') {
      const aDepTime = parseISO(
        `${trainDate} ${a.OriginStopTime.DepartureTime}`
      );
      const bDepTime = parseISO(
        `${trainDate} ${b.OriginStopTime.DepartureTime}`
      );

      return order === 'desc'
        ? compareDesc(aDepTime, bDepTime)
        : compareAsc(aDepTime, bDepTime);
    } else {
      const aArrTime = parseISO(
        `${trainDate} ${a.DestinationStopTime.ArrivalTime}`
      );
      const bArrTime = parseISO(
        `${trainDate} ${b.DestinationStopTime.ArrivalTime}`
      );

      return order === 'desc'
        ? compareDesc(aArrTime, bArrTime)
        : compareAsc(aArrTime, bArrTime);
    }
  });

  const updateTime = data?.[0]?.UpdateTime || '---';

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>車次</TableCell>
            <TableCell onClick={onClickDepartureSort}>
              發車
              {sortBy === 'departure' ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell onClick={onClickArrivalSort}>
              到達
              {sortBy === 'arrival' ? (
                <SortIcon order={order} />
              ) : (
                <UnfoldMoreIcon />
              )}
            </TableCell>
            <TableCell>總時程</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderList.length > 0 ? (
            renderList.map((detail) => (
              <Row
                key={detail.DailyTrainInfo.TrainNo}
                detail={detail}
                trainDate={trainDate}
              />
            ))
          ) : (
            <NoResults />
          )}
        </TableBody>
      </Table>
      <BottomFooter>
        <Typography>更新時間: {updateTime}</Typography>
      </BottomFooter>
    </>
  );
};

export default TrainDetail;
