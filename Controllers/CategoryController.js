import CategoryModel from "../Models/categoryModel.js";
import mongoose from "mongoose";

//Create new Category

export const createCategory = async (req, res) => {
    const newCategory = new CategoryModel(req.body);
    const catID=req.body.catID
    if(catID){
        try {
            const category = await CategoryModel.findById(catID);
    
         
                await category.updateOne({ $push: { SubCat: {SubCatName:req.body.CatName}} });
              
                res.status(200).json({"Message":"Sub Category Added"});
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        newCategory._id = mongoose.Types.ObjectId();
    try {
        await newCategory.save();
        res.status(200).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    }
    
};

//Get a Category
export const getCategory = async (req, res) => {
   
    try {
        const category = await CategoryModel.find();

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
};


