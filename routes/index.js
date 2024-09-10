const express=require ('express')
const router=express();
const {ensureAuthenticated} =require("../config/auth")
// welcome page
router.get("/",(req,res)=>res.render("WELCOME"))
router.get("/dashboard",ensureAuthenticated,(req,res)=>
    res.render("DASHBOARD",{
        name:req.user.name
    }))
module.exports=router