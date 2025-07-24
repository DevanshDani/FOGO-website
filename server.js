import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routers/foodRoute.js"
import userRouter from "./routers/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routers/cartRoute.js"
import orderRrouter from "./routers/orderRoute.js"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRrouter)

//app.use("/api/user",userRouter)
//app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://danisaloni2002:devansh2828@cluster0.lv0dz9o.mongodb.net/?