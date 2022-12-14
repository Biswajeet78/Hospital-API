const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
    },
   patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient",
   },
    status:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }
},{
    timeStamps:true
})
module.exports = Report = mongoose.model("Report",reportSchema);
