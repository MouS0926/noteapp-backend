const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    title:String,
    body:String,
    userId:String,
    user:String
},{
    versionKey:false
})

const NotesModel=mongoose.model("note",noteSchema)
module.exports={
    NotesModel
}