import { addComment, deleteComment, editComment, getComments } from "../Controllers/comment.controller.js";
import { VerifyToken } from "../Middleware/Auth.js";
export function commentRoutes(app){

    // Comment Routes
    app.post("/comment",VerifyToken,addComment)
    app.get("/comments/:videoId",getComments)
    app.delete("/comments/:id",VerifyToken,deleteComment)
    app.put("/comments/:id",VerifyToken,editComment)
}