const Worker = require("../models/worker");

const calculateLevelsMiddleware = async function(req,res,next) {
  try {
    // If there's no Level 1 connection, set Lvl 2 and Lvl 3 as null
    if (!this.gebrachtVonLvl1) {
      this.lvl2 = null;
      this.lvl3 = null;
      return next();
    }

    // Find the Level 1 worker in the database
    const level1Worker = await Worker.findById(this.gebrachtVonLvl1);

    // If Level 1 worker not found, return null for Lvl 2 and Lvl 3
    if (!level1Worker) {
      this.lvl2 = null;
      this.lvl3 = null;
      return next();
    }

    // Set Lvl 2 as the Level 1 worker
    this.lvl2 = level1Worker._id;

    // Check if Level 1 worker has a supervisor
    if (level1Worker.supervisor) {
      // Find the supervisor in the database
      const supervisor = await Worker.findById(level1Worker.supervisor);

      // If supervisor found, set it as Lvl 3
      if (supervisor) {
        this.lvl3 = supervisor._id;
      }
    }

    next();
  } catch (error) {
    console.error('Error calculating levels:', error);
    next(error);
  }
};

module.exports = calculateLevelsMiddleware;
