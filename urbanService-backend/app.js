const express= require('express')
const app = express();
const PORT = 4000;
const userRouter = require('./router/userRoute');
const empRouter = require('./router/employeeRoutes');
const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/urbanservice")
db.then(()=>{
    console.log("Successfully ,connected to mongoDB database")
}).catch((err)=>{
    console.log(err);
})

//config
app.use(express.json());

//require all routes...
const userRoutes = require("./routes/UserRoutes")
const employeeRoutes = require("./routes/employeeRoutes")
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')

//provinding to server all routes...
app.use("/users",userRoutes)
app.use("/employees",employeeRoutes)
app.use("/categories",categoryRoutes);
app.use("/products",productRoutes);

app.listen(PORT,()=>{
    console.log(`Server connected to PORT ${PORT}`);
})