import React, { useState, useEffect } from "react";

import streamData from "./data.json";
import { formatData } from "./helpers";
import StreamersList from "./components/ItemList";
import { UPDATE_DATA_FREQUENCY } from "./constants";
import './styles.css'

function App() {
  const [data, setData] = useState(formatData(streamData));
  useEffect(() => {
    const interval = setInterval(() => {
      setData(formatData);
    }, UPDATE_DATA_FREQUENCY);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return <StreamersList data={data} />;
}

export default App;
