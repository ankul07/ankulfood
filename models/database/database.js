const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.xtyv4.mongodb.net/ankulfood?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("successful connected");
}).catch((err)=>{
    console.log("not connection");
})


