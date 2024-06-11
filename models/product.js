const mongoose = require("mongoose")
const schema = mongoose.Schema(

{
    "proid":{type:String,required:true},
    "proname":{type:String,required:true},
    "category":{type:String,required:true},
    "price":{type:String,required:true}
}
)

const productmodel=mongoose.model("products",schema);
module.exports={productmodel}