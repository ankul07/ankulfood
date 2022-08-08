const router = require("express").Router();
const req = require("express/lib/request");
const Register = require("../models/schemas/register");
const navLinks = require("../models/schemas/navschemas")
const specalitySchemas = require("../models/schemas/specalityschemas")
const popularmodel = require("../models/schemas/popularschemas");
const gallerymodule = require("../models/schemas/galleryschemas");
const Signmodel = require("../models/schemas/signup");
const async = require("hbs/lib/async");

router.get("/", async(req, res) => {
    const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    const speciality = await specalitySchemas.findOne({"_id":"62f11674ae39df78d8857a30"})
   
    //629e2eb74dfb012be139b3fe ye meri installed mongo db me jo object key  hai wo hai navlinks ki
    // or ye wali speicality ki object keys  hai 629caff0864db6fc27c56fbc

    res.render("index",{
        navschemas : navLinkss,
        specalitySchemass : speciality
        
    });
})

router.get("/gallery", async (req, res) => {
    const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    const gallery = await gallerymodule.findOne({"_id": "62f116649cd56fb9fa4eebe9"});
    res.render("gallery",{
        navschemas : navLinkss,
        gallery : gallery
    });
});

router.get("/order", async (req, res) => {
     const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    res.render("order",{
        navschemas : navLinkss
    });
})

router.get("/popular", async (req, res) => {
     const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    const popular = await popularmodel.find().limit(5);
    res.render("popular",{
        navschemas : navLinkss,
        popular : popular
    });
})

router.get("/review", async (req, res) => {
     const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    res.render("review",{
        navschemas : navLinkss
    });
})

router.get("/speciality", async (req, res) => {
     const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
     const speciality = await specalitySchemas.findOne({"_id": "62f11674ae39df78d8857a30"})

    res.render("speciality",{
        navschemas : navLinkss,
        specalitySchemass : speciality
    });
})
router.get("/signpage", async (req, res) => {
    const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    

   res.render("signpage",{
       navschemas : navLinkss,
       
   });
})

router.get("/cartpage", async (req,res)=>{
    const navLinkss = await navLinks.findOne({"_id":"62f1166d770955e9b358e8fb"});
    res.render("cartpage",{
        navschemas : navLinkss,
    })
})

//for post
router.post("/register", async (req, res) => {
    try {
         const regis = new Register({
            username: req.body.username,
            email: req.body.email,
            number: req.body.number,
            foodname: req.body.foodname,
            query: req.body.query,
            })
        const registered = await regis.save();
        res.redirect("/");

        }catch(error){
            console.log(error);
            }
})


router.post("/signup",async(req,res)=>{
    try {
        const regis = new Signmodel({
            name : req.body.name,
            email : req.body.email,
            password:req.body.password
        })
        const registered = await regis.save();
        res.redirect("/");
    } catch(error){
        console.log(error);
        
    }
})











module.exports = router;