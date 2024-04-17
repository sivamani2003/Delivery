import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect(`mongodb+srv://sivamanik:A12345678b@cluster0.lpzzgep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>console.log("DB Connected"))
}