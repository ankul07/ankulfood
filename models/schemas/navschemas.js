const mongoose = require("mongoose");


const navSchemas = new mongoose.Schema({
    logoName : String,
    logoUrl : String,
    links : 
        [
            {
                label: String,
                navLink : String
            },
        ],
    
});

const navModels = new mongoose.model("navSchema",navSchemas);

module.exports = navModels;