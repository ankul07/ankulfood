const mongoose = require("mongoose");

const signschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    
});

const Signmodel = new mongoose.model("signup",signschema);

module.exports = Signmodel;