import React from "react";

const ActiveJobs = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", status: "Active" },
    { id: 2, title: "Backend Developer", status: "Active" },
    { id: 3, title: "UI/UX Designer", status: "Pending" },
    { id: 4, title: "QA Engineer", status: "Active" },
    {id:5,title:"Data Scientist",status:"Inactive"},
    {id:6,title:"Devops Engineer",status:"Active"},
    {id:7,title:"Product Manager",status:"Pending"},
    {id:8,title:"System Administrator",status:"Inactive"}
  ];

  return (
    <div className="active-jobs">
      {jobs.map((job) => (
        <div key={job.id} className="job-item">
          <div className="job-title">{job.title}</div>
          <span className={`status ${job.status.toLowerCase()}`}>
            {job.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ActiveJobs;
