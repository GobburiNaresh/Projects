const Product = require('../models/product');

const addProduct = async (req,res,next) =>{
  
    try{
      const name = req.body.name;
      const price = req.body.price;
  
      const data = await Product.create({name : name,price : price});
      res.status(201).json({newProductDetails : data});
    }catch(err){
        res.status(500).json({
        error: err
      })
  
    }
}

const getProduct = async (req,res,next) => {
    try{
      const products = await Product.findAll();
      res.status(200).json({allProducts: products});
    }
    catch(err){
      console.log('GET products is failing', JSON.stringify(err))
      res.status(500).json({
      error: err
    })
  
  }
    
}

const deleteProduct = async (req,res,next) => {
    try{
      if(!req.params.id){
        console.log("ID is missing")
        return res.status(400).json({err : 'ID is missing'});
  
      }
      const uId = req.params.id;
      await Product.destroy({where: {id: uId}});
      res.status(200);
  
    }
    catch{(error) =>{
      console.log(error);
      res.status(500).json(error);
    }}
    
}


const editProduct =  async (req, res, next) => {
    try {
      const userId = req.params.id;
      const updatedName = req.body.name;
      const updatedPrice = req.body.price;
      const product = await Product.findByPk(userId);
      product.name = updatedName;
      product.price = updatedPrice;
      await product.save();
      res.status(200).json({ updatedProduct: product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
}


module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    editProduct
}