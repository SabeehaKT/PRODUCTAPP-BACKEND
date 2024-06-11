const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {productmodel} = require("./models/product")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://sabeeha02:sabeehamongodb@cluster0.05m7a.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input = req.body
    let product = new productmodel(input)
    product.save()
   res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch().finally()
})
app.listen(8083,()=>{
    console.log("Server started")
})