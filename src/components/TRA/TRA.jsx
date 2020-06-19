import React, { Suspense } from "react";
import SearchPanel from "./components/SearchPanel";

const TRA = () => {
  return (
    <div>
      <header>
        <h1>台鐵時刻查詢</h1>
      </header>
      <Suspense fallback={<div>Get stations...</div>}>
        <SearchPanel />
      </Suspense>
    </div>
  );
};

export default TRA;
