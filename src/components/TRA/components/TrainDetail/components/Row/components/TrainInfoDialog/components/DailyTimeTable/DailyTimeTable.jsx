import React, { useContext } from 'react';
import useSWR from 'swr';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

import { swrConfig, fetcher } from 'apis/config';
import Context from 'components/TRA/context';

const Station = ({ station, isFirstStaion, isLastStation }) => {
  const { departure, arrival } = useContext(Context);
  const isTargetStation =
    station.StationID === departure.StationID ||
    station.StationID === arrival.StationID;

  const dotColor = isTargetStation
    ? 'secondary'
    : isFirstStaion || isLastStation
    ? 'primary'
    : undefined;

  const stationName = `${station.StationName.Zh_tw} ${station.StationName.En}`;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography color="textSecondary">{station.ArrivalTime}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={dotColor} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{stationName}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const DailyTimeTable = ({ trainNo }) => {
  // GET 取得當天指定[車次]的時刻表資料
  const { data } = useSWR(
    () => trainNo && `/v2/Rail/TRA/DailyTimetable/Today/TrainNo/${trainNo}`,
    fetcher,
    swrConfig
  );

  const stops = data ? data[0].StopTimes : [];

  return (
    <Timeline align="right">
      {stops.map((v, i) => (
        <Station
          key={v.StationID}
          station={v}
          isFirstStaion={i === 0}
          isLastStation={i === stops.length - 1}
        />
      ))}
    </Timeline>
  );
};

export default DailyTimeTable;
