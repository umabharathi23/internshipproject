import React from "react";
import { FaCode, FaAndroid, FaJs, FaPython } from "react-icons/fa";
import '../pages/TotalJobViews.css'

const jobViews = [
  { role: "Full Stack Developer", views: 1450, icon: <FaCode /> },
  { role: "Android Developer", views: 1200, icon: <FaAndroid /> },
  { role: "JavaScript Developer", views: 900, icon: <FaJs /> },
  { role: "Python Developer", views: 850, icon: <FaPython /> },
];

const TotalJobViews = () => {
  return (
    <div className="job-views-widget">
      <h3>Total Job Views</h3>
      <ul className="job-list">
        {jobViews.map((job, index) => (
          <li key={index} className="job-item">
            <span className="icon">{job.icon}</span>
            <span className="role">{job.role}</span>
            <span className="views">{job.views} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalJobViews;
