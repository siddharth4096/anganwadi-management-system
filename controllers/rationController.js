const Ration = require('../models/Ration');

const addRation = async (req, res) => {
  const { centreId, childrenPresent, rationDistributed } = req.body;
  try {
    const ration = await Ration.add(centreId, childrenPresent, rationDistributed);
    res.status(201).json({ message: 'Ration distribution added successfully', ration });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRations = async (req, res) => {
  try {
    const rations = await Ration.getAll();
    res.status(200).json({ rations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRationsByCentre = async (req, res) => {
  const { centreId } = req.params;
  try {
    const rations = await Ration.getByCentre(centreId);
    res.status(200).json({ rations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addRation, getAllRations, getRationsByCentre };