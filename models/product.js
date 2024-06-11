const mongoose = require("mongoose")
const schema = mongoose.Schema(

{
    "proid":String,
    "proname":String,
    "category":String,
    "price":String
}
)

const productmodel=mongoose.model("products",schema);
mongoose.model.exports={productmodel}