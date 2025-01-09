import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrpyt from 'bcrpyt'

const userSchema = new Schema(
    {
       username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim: true,
        index: true
       },
       email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim: true,
        index: true
       },
       fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
       },
       avatar:{
        type:String, // url
        required: true,
       },
       coverImage: {
        type: String, /// url
       },
       watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video", // taking videoid
        }
       ],
       password: {
        type: String,
        required: [true,'Password is required']
       },
       refreshtoken: {
        type:String,
       },
    }
)

userSchema.pre("save",async function (next) {
    
})
export const user = mongoose.model("User", userSchema)