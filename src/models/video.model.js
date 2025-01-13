import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
    {
      videofile: {
        type: String,  // cloudinary url
        required: true,
      },
      thumbnail: {
        type: String,  // cloudinary url
        required:true,
      },
      owner:[
        {
            type: Schema.Types.ObjectId,
            ref:"owner",
            required:true
        }
      ],
     title: {
        type: String,
        required: true,
     },
     description: {
        type: String,
        required: true
     },
     duration:{
        type: Number,
        required: true,
     },
     views:{
        type: Number,
        default: 0,
        required: true,
     },
     isPublished: {
        type: Boolean,
        default: true,
        required:true,
     },
    },{
        timestamps: true,
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model('Video',videoSchema)