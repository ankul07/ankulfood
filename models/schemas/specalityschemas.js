const mongoose = require("mongoose");

const specalitySchemas = new mongoose.Schema({
    box : [
        {
            firstimage : String,
            contentimg : String,
            title : String,
            subtitle:String,

        },
    ],
})
   


const specalityModule = new mongoose.model("speciality", specalitySchemas);

module.exports = specalityModule;