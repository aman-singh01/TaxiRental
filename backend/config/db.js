import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://singhaman232001_db_user:carrental77@cluster0.qgnovyg.mongodb.net/CarRental")
        .then(() => {console.log("DB connected")})
}

