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
    if(!this.isModified("password")) return;
    this.password = bcrpyt.hash(this.password,10);
    next();
})

// declaring methods to check whether the password is correct or not
userSchema.methods.isPasswordCorrect = async function (password){
     return await bcrpyt.compare(password,this.password)
}

userSchema.methods.generateAccessToken() = function() {
   return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken() = function() {
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
export const user = mongoose.model("User", userSchema)