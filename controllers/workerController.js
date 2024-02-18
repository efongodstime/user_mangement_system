
const Worker = require('../models/Mitarbeiter');

// Create a new worker
exports.createWorker = async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).json(worker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing worker by ID
exports.updateWorkerById = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.json(worker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
