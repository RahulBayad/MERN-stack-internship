const EmployeeSchema = require('./../models/employeeModel');

const getEmployeeDataFromDb = async (req,res)=>{
    const EmployeeData = await EmployeeSchema.find();
    // res.json({
    //     message : "Suceessfully found employee",
    //     data : EmployeeData
    // })
    res.json(EmployeeData)
}

const createEmployeeInDb = async (req,res) =>{
    console.log(req.body);
    try{
        let data = await EmployeeSchema.create(req.body);
        res.status(201).json({
            "message" : "employee created",
            "data":data
        });
    }catch(err){
        res.status(500).json({
            message : "error occured",
            error : err,
            flag : -1
        })
    }
}
const getEmployeeById = async (req,res) =>{
    let id = req.params.id;
    let empById = await EmployeeSchema.findById(id);
    console.log(empById);
    res.status(201).json({
        "message" : "employee fetched by Id",
        "data":empById
    });
}

const deleteEmployee = async (req,res)=>{
    let id = req.params.id
    let deletedEmployee = await EmployeeSchema.findByIdAndDelete(id)

    try{
        if(deletedEmployee == null){
            res.json({
                message:"could not found employee",
                data : deletedEmployee,
                flag : -1
            })
        }else{
            res.json({
                message:"employee found",
                deletedEmp : deletedEmployee,
                flag : 1
            })

        }
    }catch(err){
        res.status(500).json({
            message : "error occured",
            err : deletedemployee,
            flag : -1 
        })
    }
}

const updateEmployee = async (req,res)=>{
    let id = req.params.id
    let updateEmployee = await EmployeeSchema.findByIdAndUpdate(id , req.body)

    try{
        if(updateEmployee == null){
            res.json({
                message:"could not found employee",
                data : updateEmployee,
                flag : -1
            })
        }else{
            res.json({
                message:"employee data updated ",
                data : updateEmployee,
                flag : 1
            })

        }
    }catch(err){
        res.status(500).json({
            message : "error occured",
            err : updateEmployee,
            flag : -1 
        })
    }
}
module.exports = {  
    getEmployeeDataFromDb,
    createEmployeeInDb,
    getEmployeeById,
    deleteEmployee,
    updateEmployee
};

    