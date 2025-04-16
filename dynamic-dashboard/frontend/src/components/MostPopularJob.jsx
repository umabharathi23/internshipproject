import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaBriefcase } from "react-icons/fa";
import "../pages/MostPopularJob.css";

const jobData = [
  { job: "Fullstack Dev", value: 103, color: "#007bff" },
  { job: "Android Dev", value: 32, color: "#dc3545" },
  { job: "JS Dev", value: 20, color: "#ffc107" },
  { job: "Python Dev", value: 9, color: "#28a745" },
];

const MostPopularJob = () => {
  return (
    <div className="popular-job-widget">
      <div className="widget-header">
        <FaBriefcase className="icon" />
        <h3>Most Popular Job</h3>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={jobData}
            dataKey="value"
            nameKey="job"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ job, value }) => `${job}: ${value}`}
          >
            {jobData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Job Breakdown Table */}
      <div className="job-table">
        <h4>Job Type Overview</h4>
        <table>
          <thead>
            <tr>
              <th>Job Role</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((job, index) => (
              <tr key={index}>
                <td>
                  <span className="color-dot" style={{ backgroundColor: job.color }}></span>
                  {job.job}
                </td>
                <td>{job.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostPopularJob;
