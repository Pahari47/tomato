import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pahari:pahari123@cluster0.zjh3xgs.mongodb.net/foodddd').then(()=>console.log("DB Connected"));
}