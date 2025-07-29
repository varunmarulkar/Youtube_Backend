import express from "express"
import mongoose from "mongoose"
import { userRoutes } from "./Routes/user.routes.js";
import { channelRoutes } from "./Routes/channel.routes.js";
import { videoRoutes } from "./Routes/Video.routes.js";
import { commentRoutes } from "./Routes/comment.routes.js";
import cors from "cors"

const app=express()

const PORT=8000;

// Middleware
app.use(cors())
app.use(express.json())

// Routes
userRoutes(app)
channelRoutes(app)
videoRoutes(app)
commentRoutes(app)


// MongoDb connection
mongoose.connect('mongodb+srv://marulkarvarun:JWE3ga8SXNxGfg89@cluster0.wdesneq.mongodb.net/')
.then(()=>{
    console.log("DB IS CONNECTED")
})
.catch(()=>{
    console.log("DB IS NOT CONNECTED")
})

app.listen(PORT,()=>{
    console.log("server is connected")
})


