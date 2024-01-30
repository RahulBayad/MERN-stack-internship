const express= require('express')
const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
    res.status(200).send("Welcoe to Home Page")
})
let users = [
    {
        name:"raju",
        age:23
    },
    {
        name:"ram",
        age:24
    }
]
app.get('/user',(req,res)=>{
    res.json({
        message : "successfully got user data",
        users : users
    })
})
app.get('/user1',(req,res)=>{
    
    res.status(201).json({
        message : "successfully got user1 data",
        users : users
    })
})
app.listen(PORT,()=>{
    console.log(`Server connected to PORT ${PORT}`)
})