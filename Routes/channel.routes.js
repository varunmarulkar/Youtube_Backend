import { channelCreate, deleteChannel, getChannel, getChannelById, getChannelByUserId, updateChannel } from "../Controllers/Channel.controller.js";
import { VerifyToken } from "../Middleware/Auth.js";

// Channel Routes
export function channelRoutes(app){
   app.get("/channel",getChannel)
   app.get("/channel/:id",getChannelById)
   app.get("/channel/user/:userId", getChannelByUserId);
   app.post("/channel",VerifyToken,channelCreate)
   app.delete("/channel/:id",VerifyToken,deleteChannel)
   app.put("/channel/:id",VerifyToken,updateChannel)
}