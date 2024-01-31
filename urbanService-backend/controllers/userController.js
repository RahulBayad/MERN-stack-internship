const userModel = require('./../models/userModel')

const getUserData = async (req,res)=>{
    res.status(200).json({
        "message" : "Data found"
    })

}
const getUserDataFromDb = async (req,res)=>{
    let data = await userModel.find();
    
    console.log("Entered to getUserDataDb function");
    res.status(200).json({
        "message" : "Data found",
        "data" : data
    })
}

const addUser = async (req,res)=>{
    let data = req.body;
    console.log("entered data is : ",data);
    res.status(200).json({
        message : "data added"
    });
}

const addUserInDb = async (req,res)=>{
    let addedData = await userModel.create(req.body);
    console.log("entered data is : ",addedData);
    res.status(200).json({
        message : "data added",
        data : addedData
    });
}

const getUserById = async (req,res)=>{
    let User = await userModel.findById(req.params.id);
    console.log("Id is : ",User);
    res.status(200).json({
        message : "user found",
        data : User
    });
}
module.exports = {getUserData,getUserDataFromDb,addUser , addUserInDb , getUserById};