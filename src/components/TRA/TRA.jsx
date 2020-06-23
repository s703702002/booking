import React, { Suspense, useState } from "react";
import { Typography } from "@material-ui/core";

import SearchPanel from "./components/SearchPanel";
import TrainDetail from "./components/TrainDetail";
import Context from "./context";

const TRA = () => {
  const [trainDate, setTrainDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const onSearch = ({ date, departure, arrival }) => {
    setTrainDate(date);
    setDeparture(departure);
    setArrival(arrival);
  };

  return (
    <div>
      <Typography variant="h3">台鐵時刻查詢</Typography>
      <Suspense fallback={<div>Get stations...</div>}>
        <SearchPanel onSearch={onSearch} />
      </Suspense>
      <Context.Provider value={{ trainDate, departure, arrival }}>
        <Suspense fallback={<div>Get train details...</div>}>
          <TrainDetail
            departure={departure}
            arrival={arrival}
            trainDate={trainDate}
          />
        </Suspense>
      </Context.Provider>
    </div>
  );
};

export default TRA;
