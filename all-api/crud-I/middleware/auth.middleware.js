const jwt=require("jsonwebtoken")
const {BlacklistModel}=require("../model/blackListModel")


const auth=async (req,res,next)=>{
    // const token=req.headers.authorization?.split(" ")[1]
    // if(token){
    //     try {
    //         let isblacklisted=await BlacklistModel.findOne({token})
    //                     if(isblacklisted){
    //                         res.send({"msg":"plse login again"})
    //                     }
    //                     const decoded=jwt.verify(token,"moumita")
    //                     if(decoded){
                         
    //                         req.body.userId=decoded.userId
    //                         req.body.user=decoded.user
    //                         next()
    //                     }else{
    //                         res.send({"msg":"please login"})
    //                     }

    //     } catch (error) {
    //         res.send({"msg":"please login"})
    //     }
    // }else{
    //     res.send({"msg":"token needed"})
    // }


    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(token){
            let isblacklisted=await BlacklistModel.findOne({token})
                        if(isblacklisted){
                           return res.send({"msg":"plse login again"})
                        }
                        const decoded=jwt.verify(token,"moumita")
                        if(decoded){
                         
                            req.body.userId=decoded.userId
                            req.body.user=decoded.user
                            next()
                        }else{
                            res.send({"msg":"wrong password"})
                        }
        }
        else{
            res.send({"msg":"need a token"})
        }
    } catch (error) {
        res.send({"msg":error})
    }

}

module.exports={
    auth
}