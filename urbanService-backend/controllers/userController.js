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
module.exports = {getUserData,getUserDataFromDb};