const express=require("express")
const {NotesModel}=require("../model/notesModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {auth}=require("../middleware/auth.middleware")

const notesRouter=express.Router()


notesRouter.post("/create",auth,async (req,res)=>{
    try {
        const note=new NotesModel(req.body)
        await note.save()
        res.status(200).send({"msg":"a new note is added"})
    } catch (error) {
        res.send({"err":error})
    }
})


notesRouter.get("/",auth,async (req,res)=>{
  
    try {
        const notes=await NotesModel.find({userId:req.body.userId})
       
        res.status(200).send(notes)
    } catch (error) {
        res.status(500).send({"error": error});
    }
})


notesRouter.patch("/update/:noteid",auth,async (req,res)=>{
const {noteid}=req.params
const note=await NotesModel.findOne({_id:noteid})
    try {
        if(req.body.userId!=note.userId){
            res.status(200).send({"msg":"you are not authorized!"})
        }
        else{
            const notes=await NotesModel.findByIdAndUpdate({_id:noteid},req.body)
            res.status(200).send({"msg":`note with id ${noteid} is updated`})
    
        }
      
   } catch (error) {
        res.status(400).send({"err":error})
    }
})


notesRouter.delete("/delete/:noteid",auth,async (req,res)=>{
    const {noteid}=req.params
    const note=await NotesModel.findOne({_id:noteid})
    
        try {

            if(req.body.userId!=note.userId){
                res.status(200).send({"msg":"you are not authorized!"})
            }
            else{
                const notes=await NotesModel.findByIdAndDelete({_id:noteid})
                res.status(200).send({"msg":`note with id ${noteid} is deleted`})
            }
          
           
        } catch (error) {
            res.status(400).send({"err":error})
        }
    })

module.exports={
    notesRouter
}