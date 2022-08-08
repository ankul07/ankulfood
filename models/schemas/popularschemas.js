const mongoose = require("mongoose");

const popularSchemas = new mongoose.Schema([
    {
        price : String,
        images : String,
        title : String,
},
])

const popularmodel = new mongoose.model("popular",popularSchemas);

module.exports = popularmodel;