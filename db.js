import mongoose from "mongoose";

 export  const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://danisaloni2002:devansh2828@cluster0.lv0dz9o.mongodb.net/food-del ').then(()=>console.log("DB connected"));
}