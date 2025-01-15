const express=require("express")
const app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>
{
    res.render("home",{
        "user":"Archana"
    })
})
app.listen(4500,()=>console.log("server is running"))