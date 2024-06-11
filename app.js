const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product = require("./models/product")


const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    res.send("Welcome to Add Product page")
})

app.listen(8080,()=>{
    console.log("Server started")
})