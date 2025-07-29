import VideoModel from "../Models/Video.model.js";

// Upload a video
export async function uploadVideo(req,res){
    try {
        const {title,description,thumbnailUrl,videoUrl,channelId,uploader}=req.body

        if(!title || !videoUrl || !channelId || !thumbnailUrl || !uploader){
            return res.status(400).json({message:"fill all the fields"})
        }
    
        const newVideo=await VideoModel.create({
            title,description,thumbnailUrl,videoUrl,channelId,uploader
        })
    
        res.status(201).json({message:"video has been uploaded",newVideo})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Get all videos
export async function showVideos(req,res){
    try {
        const videos=await VideoModel.find()
        res.status(200).json(videos)
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

// Show videos by ID
export async function showVideosById(req,res){
    try {
      const {id}=req.params
      const video=await VideoModel.findById(id)
      if(!video){
        return res.status(404).json({message:"Video has not found"})
      }
      res.status(200).json(video)
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

// Update video by ID
export async function updateVideo(req,res){
    try {
        const {id}=req.params
        const updatedVideo=await VideoModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!updatedVideo){
            return res.status(200).json({message:"Video has not found"})
        }
        res.status(200).json({message:"video has been updated",updatedVideo})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Delete video by ID
export async function deleteVideo(req,res){
    try {
        const {id}=req.params
        const deletedVideo=await VideoModel.findByIdAndDelete(id)
        if(!deletedVideo){
            return res.status(200).json({message:"Video has not found"})
        }
        res.status(200).json({message:"video has been updated",deletedVideo})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

