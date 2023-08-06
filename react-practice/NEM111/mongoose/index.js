const mongoose =require("mongoose")

const main=async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/productDb")
        console.log("db connected");
        await prodModel.insertMany([
            {
            name:"bag",
            qty:2,
            price:4567,
            desc:"it is a bag"
        },
        {
            name:"watch",
            qty:2,
            price:234,
            desc:"it is a watch"
        },
        {
            name:"pen",
            qty:5,
            price:123,
            desc:"it is a pen"
        }
    ])
        console.log("bag is inserted");
    } catch (error) {
        console.log("err");
    }
}
main()

const productSchema=mongoose.Schema({
    name:String,
    qty:Number,
    price:Number,
    desc:String
}
,{versionKey:false})

const prodModel=mongoose.model("product",productSchema)