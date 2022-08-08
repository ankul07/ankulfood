const mongoose = require("mongoose");

const foodSchemas = new mongoose.Schema({
    username : String,
    email : String,
    number: Number,
    foodname : String,
    query : String,


});

const Register = new mongoose.model("foodOrder",foodSchemas);

module.exports = Register;