import { deleteVideo, showVideos, showVideosById, updateVideo, uploadVideo } from "../Controllers/video.controller.js";
import { VerifyToken } from "../Middleware/Auth.js";

// Video Routes
export function videoRoutes(app){
     app.get("/videos",showVideos)
     app.post("/videos",VerifyToken,uploadVideo)
     app.get("/video/:id",showVideosById)
     app.put("/video/:id",VerifyToken,updateVideo)
     app.delete("/video/:id",VerifyToken,deleteVideo)
}