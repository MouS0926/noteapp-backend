const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("hi home route")
})

router.get("/weather",(req,res)=>{

    const data={
        delhi:"Winters",
        chennai:"Summers",
        banglore:"winters"
        }
        
    
    const { city }=req.query
        const weather=data[city]
    res.send(`weather of  ${city} is currently ${weather}`)
})

router.get("/student/:id",(req,res)=>{

    const id=req.params.id
   
    res.send(`student ${id}`)
})

router.get("/contact",(req,res)=>{
    res.send("hi contact route")
})


module.exports=router