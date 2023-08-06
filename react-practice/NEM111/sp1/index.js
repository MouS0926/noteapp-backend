const express=require("express")
const timelogger=require("./middleware/timeLogger")
const keeprecord=require("./middleware/keeprecord")
const app=express()


const router=require("./router")

// app.use((req,res,next)=>{

//     let startTime=new Date().getTime()
//     next()
//     let endtime=new Date().getTime()
//     console.log(endtime-startTime);
    
// })

app.use(timelogger)
app.use(keeprecord)
app.use("/myroute",router)

// app.get("/",(req,res)=>{
//     console.log("get req");
//         res.status(200).send("hello welcome")
// })

// app.get("/about",(req,res)=>{
 
//         res.status(200).send("welcome about")
// })

app.listen(8080,()=>{
    console.log("server is running.....");
})

module.exports=app