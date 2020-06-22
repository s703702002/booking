import React from "react";
import useSWR from "swr";
// import styled from 'styled-components';
import { fetcher } from "apis/TRA";
import { swrConfig } from "apis/config";

const TrainTodayInfo = ({ trainNo }) => {
  // GET 取得當天指定[車次]的車次資料
  const { data } = useSWR(
    () => trainNo && `/v2/Rail/TRA/DailyTrainInfo/Today/TrainNo/${trainNo}`,
    fetcher,
    swrConfig
  );

  return <div>123123123123123123123123123</div>;
};

export default TrainTodayInfo;
