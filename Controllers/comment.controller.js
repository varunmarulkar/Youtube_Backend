import CommentModel from "../Models/Comment.model.js";

// Add a new comment
export async function addComment(req,res){
    try {
        const {userId,videoId,text}=req.body

        // check for required fields
        if(!userId || !videoId || !text ){
            return res.status(400).json({message:"fill all the required fields"})
        }

             // Create the comment and populate user details
        let newComment=await CommentModel.create({
            userId,videoId,text
        })

        newComment = await newComment.populate("userId", "username"); 
        res.status(201).json({message:"new comment has added",newComment})
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}


// Get all comments for a specific video
export async function getComments(req,res){
    try {
        const {videoId}=req.params
        const comments=await CommentModel.find({videoId}).populate("userId", "username")

            if (comments.length === 0) {
                return res.status(404).json({ message: "No comments found for this video" });
              }
        
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


// Delete comment by id
export async function deleteComment(req,res){
    try {
        const{id}=req.params
        const deletedComment=await CommentModel.findByIdAndDelete(id)

        if(!deletedComment){
            return res.status(404).json({message:"comment has not found"})
        }
        res.status(200).json({message:"comment has been deleted",deletedComment})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Edit comment by id
export async function editComment(req,res){
    try {
        const{id}=req.params
        const editedComment=await CommentModel.findByIdAndUpdate(id,req.body,{new:true})

        if(!editedComment){
            return res.status(404).json({message:"comment has not found"})
        }
        res.status(200).json({message:"comment has been updated",editedComment})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}