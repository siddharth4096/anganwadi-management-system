const Report = require('../models/Report');

const submitReport = async (req, res) => {
  const { supervisorId, centreId, report } = req.body;
  try {
    const newReport = await Report.submit(supervisorId, centreId, report);
    res.status(201).json({ message: 'Report submitted successfully', report: newReport });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.getAll();
    res.status(200).json({ reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReportsBySupervisor = async (req, res) => {
  const { supervisorId } = req.params;
  try {
    const reports = await Report.getBySupervisor(supervisorId);
    res.status(200).json({ reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReportsByCentre = async (req, res) => {
  const { centreId } = req.params;
  try {
    const reports = await Report.getByCentre(centreId);
    res.status(200).json({ reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitReport, getAllReports, getReportsBySupervisor, getReportsByCentre };