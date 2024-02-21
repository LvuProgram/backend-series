import mongoose, { Schema } from 'mongoose';
import mongooseAggregate from 'mongoose-aggregate';

// Define the video schema using Mongoose
const videoSchema = new Schema({
    // Video details
    videoFile:{
        type: String,
        required: true,
    },
    thumbNail:{
        type: String,
        required: true,    
    },
    title:{
        type: String,
        required: true,   
    },
    discription:{
        type: String,
        required: true,    
    },
    duration:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    published:{
        type: Boolean,
        default: true, 
    },
    // Reference to the owner (user) of the video
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'USER'
    }
}, { timestamps: true })

// Use mongoose-aggregate plugin
videoSchema.plugin(mongooseAggregate);

// Export the Mongoose video model
export const Video = mongoose.model('Video', videoSchema)
