const express=require("express")
const {connection}=require("./db")

const {userRouter}=require("./routes/userRoutes")
const {notesRouter}=require("./routes/notesRoute")
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/notes",notesRouter)

app.get("/",(req,res)=>{
    res.status(200).send("home")
})






app.listen(8080,async ()=>{
    try {
        await connection

        console.log("connected to");
        console.log("server is running.");
    } catch (error) {
       console.log(error);
    }

})