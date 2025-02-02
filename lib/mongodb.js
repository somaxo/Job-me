import mongoose from "mongoose";


const connectMongodb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
       console.log("Error connecting to mongoDB", error); 
    }
}

export default connectMongodb