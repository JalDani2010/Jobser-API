const getAllJobs = async (req, res) => {
  res.status(200).json({ message: "Get all jobs" });
};

const getJob = async (req, res) => {
  res.status(200).json({ message: "Get job" });
};

const createJob = async (req, res) => {
  res.status(200).json({ message: "Create job" });
};

const updateJob = async (req, res) => {
  res.status(200).json({ message: "Update job" });
};

const deleteJob = async (req, res) => {
  res.status(200).json({ message: "Delete job" });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
