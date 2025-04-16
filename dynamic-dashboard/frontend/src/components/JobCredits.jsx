import React from "react";
import { FaCheckCircle, FaBolt, FaGift } from "react-icons/fa";
import "../pages/JobCredits.css";

const credits = [
  { type: "Basic Credits", count: 50, icon: <FaCheckCircle /> },
  { type: "Boost Credits", count: 20, icon: <FaBolt /> },
  { type: "Reward Credits", count: 10, icon: <FaGift /> },
];

const JobCredits = () => {
  return (
    <div className="job-credits-widget">
      <h3>Job Credits</h3>
      <ul>
        {credits.map((credit, index) => (
          <li key={index} className="credit-card">
            <span className="icon">{credit.icon}</span>
            <span className="type">{credit.type}</span>
            <span className="count">{credit.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCredits;
