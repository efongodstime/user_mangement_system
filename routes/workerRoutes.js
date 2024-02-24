const express = require('express');
const router = express.Router();
const Worker = require('../models/worker');
const calculateLevels = require('../middleware/calculateLevels');

// Add a new worker entry
router.post('/add', calculateLevels, async (req, res) => {
    try {
        const formData = req.body;

        // Check if required fields are provided and not empty
        const { firstName, lastName } = formData;
        if (!firstName || !lastName) {
            return res.status(400).json({ message: 'First name and last name are required' });
        }

        const newWorker = new Worker(formData);
        await newWorker.save();
        res.status(201).json({ message: 'Worker added successfully', worker: newWorker });
    } catch (error) {
        console.error('Error adding worker:', error);
        res.status(500).json({ message: 'Failed to add worker' });
    }
});



// Update worker
router.put('/update/:id', calculateLevels, async (req, res) => {
    const workerId = req.params.id;
    try {
        let worker = await Worker.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }
        worker.set(req.body);
        worker = await worker.save();
        res.json({ message: 'Worker updated successfully', worker });
    } catch (error) {
        console.error('Error updating worker:', error);
        res.status(500).json({ message: 'Failed to update worker' });
    }
});

// Delete worker
router.delete('/delete/:id', async (req, res) => {
    const workerId = req.params.id;
    try {
        const deletedWorker = await Worker.findByIdAndDelete(workerId);
        if (!deletedWorker) {
            return res.status(404).json({ message: 'Worker not found' });
        }
        res.json({ message: 'Worker deleted successfully', worker: deletedWorker });
    } catch (error) {
        console.error('Error deleting worker:', error);
        res.status(500).json({ message: 'Failed to delete worker' });
    }
});

// Get specific worker
router.get('/read/:id', async (req, res) => {
    const workerId = req.params.id;
    try {
        const worker = await Worker.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }
        res.json({ worker });
    } catch (error) {
        console.error('Error fetching worker:', error);
        res.status(500).json({ message: 'Failed to fetch worker' });
    }
});

module.exports = router;
