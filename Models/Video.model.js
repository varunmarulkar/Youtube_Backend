import mongoose from 'mongoose';


// Video Schema
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    videoUrl:String,
    description: {
        type: String,
    },
    channelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
        required: true
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    uploadDate: {
        type: Date,
        default: Date.now()
    }

});

const VideoModel = mongoose.model('Video', videoSchema);
export default VideoModel