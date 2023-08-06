const timelogger=(req,res,next)=>{
    let startTime=new Date().getTime()
    next()
    let endtime=new Date().getTime()
    console.log(endtime-startTime);
}

module.exports=timelogger