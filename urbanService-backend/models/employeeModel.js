const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empName:{
        type: String,
        required: true
    },
    empEmail:{
        type: String,
    },
    empAge:{
        type: Number,
    },
    empIsMarried:{
        type: Boolean,
        default: false
    },
    empSalary:{
        type : Number
    }
})
module.exports = mongoose.model('Employee',employeeSchema);

