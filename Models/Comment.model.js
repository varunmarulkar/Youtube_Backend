import mongoose from "mongoose";


// Comment Schema
const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoId: {
      type: String,
      ref: "Video",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel= mongoose.model('Comment', commentSchema);
export default CommentModel
