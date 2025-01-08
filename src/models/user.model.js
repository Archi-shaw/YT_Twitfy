import mongoose, {Schema} from "mongoose";

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
       watc
       email: String,
       fullName: String,
       avatar: String,
       coverImage: String,
       password: String,
       refreshtoken: String,

    }
)

export const user = mongoose.model("User", userSchema)