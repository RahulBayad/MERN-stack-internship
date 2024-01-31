const express= require('express')
const app = express();
const PORT = 4000;
const userRouter = require('./router/userRoute');
const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/urbanservice")
db.then(()=>{
    console.log("Successfully ,connected to mongoDB database")
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use('/users',userRouter);

app.listen(PORT,()=>{
    console.log(`Server connected to PORT ${PORT}`);
})