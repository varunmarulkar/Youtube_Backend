import mongoose from 'mongoose';

// Channel Schema
const channelSchema = new mongoose.Schema({
  channelName:{
    type:String,
    required:true  
  },
  handle:{
    type:String,
    required:true,
    unique:true
  },
  logo:String,
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  subscribers:{
    type:Number,
    default:0
  },
  description:String,
  channelBanner:String,
  videos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video"
  }],

},  {timestamps:true});


const ChannelModel = mongoose.model('Channel', channelSchema);
export default ChannelModel