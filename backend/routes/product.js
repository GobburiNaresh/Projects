const path = require('path');

const express = require('express');

const router = express.Router();

const activityController = require('../controllers/product');

router.post('/add-activity' ,activityController.addActivity );

router.get('/get-activity',activityController.getActivity);
  
router.put('/status-activity/:id',activityController.updateActivityStatus);


module.exports = router;