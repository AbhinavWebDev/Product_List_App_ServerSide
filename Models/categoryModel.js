import mongoose, { SchemaTypes } from "mongoose";
const categorySchema = mongoose.Schema({
    CatName: String,
    SubCat: [{
        SubCatName: String,
        ProductName: []
    }
    ],
},
    {
        timestamps: true
    })
var CategoryModel = mongoose.model("Category", categorySchema)
export default CategoryModel