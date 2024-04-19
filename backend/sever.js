import express from "express"
import cors from "cors"
import {connectDB} from './config/db.js'
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
const app = express()
const port = 4010
app.use(express.json())
app.use(cors())
connectDB();
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
    res.send("API is ok")
})
app.listen(port,()=>{
    console.log(`Sever started on http://localhost:${port}`)
})