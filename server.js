const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");
PORT = process.env.PORT || 5000;


const allRouter = require("./routes/routes")
const database = require("./models/database/database");
const navlinks = require("./models/createdatabase/navlinks");
const specalitySchemas = require("./models/createdatabase/specalitycreate")
const hbs = require("hbs");
const createpopular = require("./models/createdatabase/createpopular");
const gallerycreate = require("./models/createdatabase/gallerycreate");




app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(allRouter);


app.set("view engine","hbs");
const static_Path = path.join(__dirname, "/public");
app.use(express.static(static_Path));

const partials = path.join(__dirname,"/template_folder")
hbs.registerPartials(partials)




app.listen(PORT, ()=>{
    console.log(`we are listening the port number is ${PORT}`);
});