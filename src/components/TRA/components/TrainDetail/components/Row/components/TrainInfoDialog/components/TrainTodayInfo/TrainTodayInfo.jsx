import React from "react";
import useSWR from "swr";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { fetcher } from "apis/TRA";
import { swrConfig } from "apis/config";

const tripLine = {
  0: "不經山海線",
  1: "山線",
  2: "海線"
};

const wheelChairFlag = {
  0: "否",
  1: "是"
};

const packageServiceFlag = {
  0: "否",
  1: "是"
};

const diningFlag = {
  0: "否",
  1: "是"
};

const bikeFlag = {
  0: "否",
  1: "是"
};

const breastFeedingFlag = {
  0: "否",
  1: "是"
};

const dailyFlag = {
  0: "否",
  1: "是"
};

const serviceAddedFlag = {
  0: "否",
  1: "是"
};

const TrainTodayInfo = ({ trainNo }) => {
  // GET 取得當天指定[車次]的車次資料
  const { data } = useSWR(
    () => trainNo && `/v2/Rail/TRA/DailyTrainInfo/Today/TrainNo/${trainNo}`,
    fetcher,
    swrConfig
  );

  if (!data) return null;

  const info = data[0];
  const startStationName = `${info.StartingStationName.Zh_tw} ${info.StartingStationName.En}`;
  const endStationName = `${info.EndingStationName.Zh_tw} ${info.EndingStationName.En}`;

  return (
    <Box my={2}>
      <Typography variant="subtitle1" gutterBottom>
        <strong>起站: </strong>
        {startStationName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>訖站: </strong>
        {endStationName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>山海線類型: </strong>
        {tripLine[info.TripLine]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否設身障旅客專用座位車: </strong>
        {wheelChairFlag[info.WheelchairFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否提供行李服務: </strong>
        {packageServiceFlag[info.PackageServiceFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否提供訂便當服務: </strong>
        {diningFlag[info.DiningFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否人車同行班次(置於攜車袋之自行車各級列車均可乘車): </strong>
        {bikeFlag[info.BikeFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否設有哺(集)乳室車廂: </strong>
        {breastFeedingFlag[info.BreastFeedingFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否每日行駛: </strong>
        {dailyFlag[info.DailyFlag]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>是否為加班車: </strong>
        {serviceAddedFlag[info.ServiceAddedFlag]}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>其他: </strong>
        {info.Note.Zh_tw} {info.TrainTypeName.Zh_tw}
      </Typography>
    </Box>
  );
};

export default TrainTodayInfo;
