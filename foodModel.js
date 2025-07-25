
 import mongoose from "mongoose";

 const foodSchema = new mongoose.Schema({
     name: { type: String, required: true },
     description: { type: String },
     price: { type: Number, required: true },
     category: { type: String, required: true },
     image: { type: String, required: true }
 });
 
 export default mongoose.model("Food", foodSchema);