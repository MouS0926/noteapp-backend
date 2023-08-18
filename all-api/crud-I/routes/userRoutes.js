const express=require("express")
const {UserModel}=require("../model/usermodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {BlacklistModel}=require("../model/blackListModel")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {username,email,pass}=req.body
     
        try {
            // let isexist=await UserModel.findOne({email})
            // if(isexist){
            //     return res.send({"msg":"this email is already registered"})
            // }
    
    
            bcrypt.hash(pass, 5,async (err, hash)=> {
                if(err){
                    res.send({"err":err})
                }
                else{
                    const user=new UserModel({...req.body,pass:hash})
                    await user.save()
                    res.status(200).send({"msg":"The new user has been registered",user})
                }
            });
        
             
        
    
        
        } catch (error) {
            res.status(400).send({"error":error})
        } 
    })
    

    userRouter.post("/login",async (req,res)=>{
    const {email,pass}=req.body

        try {
            const user=await UserModel.findOne({email})
            
        if(user){

            bcrypt.compare(pass, user.pass, (err, result)=> {
                if(result){

                    const token=jwt.sign({ userId: user._id,user:user.username }, 'moumita')
                    // const rtoken=jwt.sign({ rpay: 'rtoken' }, 'rmoumita')
                    res.status(200).send({"msg":"Login successful!","token":token})
                }
                else{
                    res.status(200).send({"err":err})
                }
            });

            }

            else{
                res.send({"err":"wrong credential"})
            }
        } catch (error) {
            res.send({"err":error})
        }
    })





    userRouter.get("/logout",async (req,res)=>{
        let token=req.headers.authorization?.split(" ")[1]
        try {
         const blackedToken=new BlacklistModel({token})
         await blackedToken.save()
         res.status(200).send({"msg":"User has been logged out"})
        } catch (error) {
         res.status(400).send({"error":error})
        }
     })


module.exports={
    userRouter
}