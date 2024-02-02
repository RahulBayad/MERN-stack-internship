const productControllers = require('./../controller/productControllers');
const router = require('express').Router();

router.post('/product',productControllers.createProduct);
router.get('/product',productControllers.getProduct);
router.get('/product/:status',productControllers.getProductByStatus)
router.get("/productbyqty/:qty", productControllers.getProductByQtyFilter);

module.exports = router;
