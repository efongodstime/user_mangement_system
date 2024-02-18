
const calculateLevels = async (req, res, next) => {
    try {
      const { gebrachtVonLvl1 } = req.body;
  
      if (!gebrachtVonLvl1) {
        // If 'Gebracht von (Lvl1)' is not provided, set 'Lvl 2' and 'Lvl 3' to null
        req.body.lvl2 = null;
        req.body.lvl3 = null;
        return next();
      }
  
      // Find the worker referenced by 'Gebracht von (Lvl1)'
      const parentWorker = await Worker.findById(gebrachtVonLvl1);
  
      if (!parentWorker) {
        return res.status(400).json({ message: 'Invalid reference for Gebracht von (Lvl1)' });
      }
  
      // Set 'Lvl 2' to the 'Gebracht von (Lvl1)' of the parent worker
      req.body.lvl2 = parentWorker.gebrachtVonLvl1;
  
      if (parentWorker.gebrachtVonLvl1) {
        // If the parent worker has a 'Gebracht von (Lvl1)', set 'Lvl 3' to it
        req.body.lvl3 = parentWorker.gebrachtVonLvl1;
      } else {
        // If the parent worker does not have a 'Gebracht von (Lvl1)', set 'Lvl 3' to null
        req.body.lvl3 = null;
      }
  
      next();
    } catch (error) {
      console.error('Error calculating levels:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = calculateLevels;
  