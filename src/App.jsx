import React, { useState } from "react";
import "./App.css";

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import GoTop from "./components/GoTop";
import THSR from "./components/THSR";
import TRA from "./components/TRA";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={2}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function App() {
  const [transportation, setTransportation] = useState(0);

  const handleChange = (event, newValue) => {
    setTransportation(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={transportation}
          onChange={handleChange}
          aria-label="App tabs"
        >
          <Tab label="THSR" {...a11yProps(0)} />
          <Tab label="TRA" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={transportation} index={0}>
        <THSR />
      </TabPanel>
      <TabPanel value={transportation} index={1}>
        <TRA />
      </TabPanel>
      <GoTop />
    </div>
  );
}

export default App;
