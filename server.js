
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const calculateLevels = require('./middleware/calculateLevels');

const Worker = require('./models/worker');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user_management');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("connected")



// Add a new worker entry
app.post('/workers', calculateLevels, async (req, res) => {
    try {
        const newWorker = new Worker(req.body);
        await newWorker.save();
        res.status(201).json({ message: 'Worker added successfully', worker: newWorker });
      } catch (error) {
        console.error('Error adding worker:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

// Edit an existing worker entry by ID
app.put('/workers/:id', calculateLevels, async (req, res) => {

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
      res.status(500).json({ message: 'Internal server error' });
    }
 });

//  error handling middleware

 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });


  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  