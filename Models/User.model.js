import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }

});

const UserModel= mongoose.model('User', userSchema);
export default UserModel