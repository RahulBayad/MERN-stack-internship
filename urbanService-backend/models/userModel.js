const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type:String
    },
    email : {
        type:String
    },
    age : {
        type:String
    },
    isActive : {
        type:Boolean,
        default : false
    }
})
module.exports = mongoose.model("User",userSchema);