const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    box : [
        {
            image : String,
            title: String,
            subtitle : String,
        },
    ],
});

const galleryModels = new mongoose.model("gallery",gallerySchema);

module.exports = galleryModels;