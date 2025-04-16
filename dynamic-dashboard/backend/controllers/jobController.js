const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createJob = async (req, res) => {
  try {
    const { title, views, status } = req.body;
    const job = new Job({ title, views, status });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: "Error creating job" });
  }
};
