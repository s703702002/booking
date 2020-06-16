import React, { useState } from "react";
import "./App.css";

import GoTop from "./components/GoTop";
import THSR from "./components/THSR";
import TRA from "./components/TRA";
import SwitchTransport from "./components/SwitchTransport";

function renderTransportation(key) {
  switch (key) {
    case "THSR":
      return <THSR />;
    case "TRA":
      return <TRA />;
    default:
      return null;
  }
}

function App() {
  const [transportation, setTransportation] = useState("");

  return (
    <div className="App">
      <SwitchTransport onChange={setTransportation} />
      {renderTransportation(transportation)}
      <GoTop />
    </div>
  );
}

export default App;
