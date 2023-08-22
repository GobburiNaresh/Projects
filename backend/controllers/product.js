const Activity = require('../models/product');

const addActivity = async (req,res,next) =>{
  
    try{
      const name = req.body.name;
      const description = req.body.description;
  
      const data = await Activity.create({name : name,description : description});
      res.status(201).json({newActivityDetails : data});
    }catch(err){
        res.status(500).json({
        error: err
      })
  
    }
}

const getActivity = async (req,res,next) => {
    try{
      const activities = await Activity.findAll();
      res.status(200).json({allActivities: activities});
    }
    catch(err){
      console.log('GET products is failing', JSON.stringify(err))
      res.status(500).json({
      error: err
    })
  
  }
    
}

const updateActivityStatus = async (req, res, next) => {
  try {
    const activityId = req.params.id;
    const { status } = req.body;
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    if (status === 'done') {
      activity.donelist = activity.name + ' - ' + activity.description;
    } else if (status === 'remaining') {
      activity.remaininglist = activity.name + ' - ' + activity.description;
    }

    await activity.save();

    res.status(200).json({ updatedActivity: activity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
    addActivity,
    getActivity,
    updateActivityStatus,
}