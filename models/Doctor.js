const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        uniqure:true,
    },
    password:{
        type:String,
        required:true,
    },
    speciality:{
        type:String,
        required:true
    }

},{
    timestamps:true,
})
module.exports = Doctor = mongoose.model("Doctor",docSchema);
