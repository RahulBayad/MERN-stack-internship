const empRouter = require('express').Router();
const employeeController = require("./../controllers/employeeController")

empRouter.get("/employee",employeeController.getEmployeeDataFromDb)
empRouter.post("/employee",employeeController.createEmployeeInDb)
empRouter.get("/employee/:id",employeeController.getEmployeeById)
empRouter.delete("/employee/:id",employeeController.deleteEmployee)
empRouter.put("/employee/:id",employeeController.updateEmployee)

module.exports = empRouter;
