import React, { useEffect, useState } from "react";
import { TileLayout } from "@progress/kendo-react-layout";
import { fetchJobs } from "../api";
import ActiveJobs from "../components/ActiveJobs";
import TotalJobViews from "../components/TotalJobViews";
import MostPopularJob from "../components/MostPopularJob";
import JobCredits from "../components/JobCredits";

const initialPositions = JSON.parse(localStorage.getItem("dashboard-positions")) || [
  { col: 1, row: 1, sizeX: 1, sizeY: 1 },
  { col: 2, row: 1, sizeX: 1, sizeY: 1 },
  { col: 3, row: 1, sizeX: 1, sizeY: 1 },
  { col: 4, row: 1, sizeX: 1, sizeY: 1 },
];

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  const onResetLayout = () => {
    setPositions(initialPositions);
    localStorage.setItem("dashboard-positions", JSON.stringify(initialPositions));
  };

  const handleReposition = (newPositions) => {
    setPositions(newPositions);
    localStorage.setItem("dashboard-positions", JSON.stringify(newPositions));
  };

  const widgets = [
    { header: "Total job views", body: <TotalJobViews jobs={jobs} /> },
    { header: "Active jobs", body: <ActiveJobs jobs={jobs} /> },
    { header: "Job Credits", body: <JobCredits /> },
    { header: "Most popular job", body: <MostPopularJob jobs={jobs} /> },
  ];

  return (
    <div className="App">
      <h1>Job Dashboarddddd</h1>
      <div className="k-display-flex">
        <TileLayout
          columns={4}
          rowHeight={255}
          positions={positions}
          gap={{ rows: 10, columns: 10 }}
          items={widgets}
          onReposition={handleReposition}
        />
        
      </div>
    </div>
  );
};

export default Dashboard;
