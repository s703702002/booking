interface APIResponse {
  UpdateTime: string;
  DailyTrainInfo: {
    TrainNo: string;
  };
  OriginStopTime: {
    DepartureTime: string;
  };
  DestinationStopTime: {
    ArrivalTime: string;
  };
}

export default APIResponse;
