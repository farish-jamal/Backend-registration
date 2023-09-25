const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mob: {
        type: Number,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;