const categorySchema = require('./../models/categoryModel');

const createCategory = async (req,res) => {
    try{
        const category = categorySchema.create(req.body);
        res.status(201).json({
            message : "category created",
            flag : 1,
            data : category
        })
    }catch(err){
        res.status(500).json({
            message : "server error",
            flag : -1,
            err : err
        })
    }
}

const getCategory = async (req,res) => {
    // try{
        const categories =await categorySchema.find();
        res.status(200).json({
            message : "categories fetched",
            flag : 1,
            data : categories
        })
    // }catch(err){
    //     res.status(500).json({
    //         message : "server error",
    //         flag : -1,
    //         err : err
    //     })
    // }
}

module.exports = {
    createCategory,
    getCategory
}