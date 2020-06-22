import React, { useContext } from "react";
import useSWR from "swr";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

import { swrConfig } from "apis/config";
import { fetcher } from "apis/TRA";
import Context from "components/TRA/context";

const DailyTimeTable = ({ trainNo }) => {
  const { departure, arrival } = useContext(Context);

  // GET 取得當天指定[車次]的時刻表資料
  const { data } = useSWR(
    () => trainNo && `/v2/Rail/TRA/DailyTimetable/Today/TrainNo/${trainNo}`,
    fetcher,
    swrConfig
  );

  const stops = data ? data[0].StopTimes : [];

  return (
    <div>
      <Timeline align="right">
        {stops.map(v => (
          <TimelineItem key={v.StationID}>
            <TimelineOppositeContent>
              <Typography color="textSecondary">{v.ArrivalTime}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color={
                  v.StationID === departure.StationID ||
                  v.StationID === arrival.StationID
                    ? "secondary"
                    : undefined
                }
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                {`${v.StationName.Zh_tw} ${v.StationName.En}`}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default DailyTimeTable;
