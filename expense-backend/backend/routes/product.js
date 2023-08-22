const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

router.post('/add-product' ,productController.addProduct );

router.get('/get-products',productController.getProduct);

router.delete('/delete-products/:id',productController.deleteProduct);
  
router.put('/edit-products/:id',productController.editProduct);


module.exports = router;