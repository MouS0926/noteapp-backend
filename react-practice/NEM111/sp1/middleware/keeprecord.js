const fs=require("fs")

const keepRecord=(req,res,next)=>{

    let data=`\n ${req.method} | API Endpoint ${req.url}`
    fs.appendFileSync("./record.txt",data,"utf-8")
    next()
}

module.exports=keepRecord