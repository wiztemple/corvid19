import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import StatsSummary from "./StatsSummary";
// style
import "./StatsSection.css";

const StatsSection = () => {
  const [globalStats, setGlobalStats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.covid19api.com/summary");
      console.log(response.data.Global);
      setGlobalStats(response.data.Global);
    };
    fetchData();
  }, []);
  return (
    <section
      className="realtime-data-section section"
      id="realtime-data-section"
    >
      <div className="container">
        <h1 className="realtime-data-section-title">
          Realtime Monitoring of COVID-19
        </h1>
        <StatsSummary globalStats={globalStats} />
      </div>
    </section>
  );
};

export default StatsSection;
