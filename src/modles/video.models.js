import mongoose, {Schema} from 'mongoose';
import mongooseAggregate from 'mongoose-aggregate';

const videoSchema = new Schema({

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
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'USER'
    }





},{timestamps:true})


videoSchema.plugin(mongooseAggregate);
export const Video = mongoose.model('Video',videoSchema)