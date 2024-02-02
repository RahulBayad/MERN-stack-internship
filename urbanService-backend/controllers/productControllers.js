const productModel = require('./../models/productModel');

const createProduct = async (req,res) => {
    try{
        const product = await productModel.create(req.body);
        res.status(201).json({
            message : "product created",
            flag : 1,
            data : product
        })
    }catch(err){
        res.status(500).json({
            message : "server error",
            flag : -1,
            err : err
        })
    }
}

const getProduct = async (req,res) => {
    try{
        const products =await productModel.find().populate("category");
        res.status(200).json({
            message : "products fetched",
            flag : 1,
            data : products
        })
    }catch(err){
        res.status(500).json({
            message : "server error",
            flag : -1,
            err : err
        })
    }
}
const getProductByStatus = async (req, res) => {
    console.log(req.params.status);
  try {
    const products = await productModel.find({ status: req.params.status }).populate("category");
    res.status(200).json({
      message: "Products Fetched",
      flag: 1,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getProductByQtyFilter = async (req, res) => {


    //100
    try{
        //const products = await productModel.find({qty:{$gt:req.params.qty}})
        const products = await productModel.find({qty:{$lte:req.params.qty}}).populate("category")
        res.status(200).json({
            message: "Products Fetched",
            flag: 1,
            data: products,
        })

    }catch(error){

        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data: error,
        })
    }

}

module.exports = {
    createProduct,
    getProduct,
    getProductByStatus,
    getProductByQtyFilter
}