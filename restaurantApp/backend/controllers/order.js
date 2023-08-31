const Order = require('../models/order');

const addOrder = async (req,res,next) =>{
  
    try{
      const amount = req.body.amount;
      const dish = req.body.dish;
      const table_number = req.body.table_number;
  
      const data = await Order.create({amount : amount,dish : dish,table_number : table_number});
      res.status(201).json({newOrderDetails : data});
      
    }catch(err){
        res.status(500).json({
        error: err
      })
  
    }
}

const getOrder = async (req,res,next) => {
    try{
      const orders = await Order.findAll();
      res.status(200).json({allOrders : orders});
    }
    catch(err){
      console.log('GET products is failing', JSON.stringify(err))
      res.status(500).json({
      error: err
    })
  
  }
    
}

const deleteOrder = async (req, res, next) => {
  
  try{
    const orderId = req.params.id;
    if(!orderId){
      console.log("ID is missing")
      return res.status(400).json({err : 'ID is missing'});

    }
    await Order.destroy({where: {id: orderId}});
    res.status(200);

  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
    addOrder,
    getOrder,
    deleteOrder,
}