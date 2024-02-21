import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Define the user schema using Mongoose
const userSchema = new Schema(
    {
        // User details
        userName: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, // cloudinary url 
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url 
        },
        watchHistory: [{
            type: Schema.Types.ObjectId,
            ref: 'video'
        }],
        
        // User authentication
        password: {
            type: String,
            required: [true, "password is required!"]
        },
        refreshToken: {
            type: String,
        }
    }, { timestamps: true })

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
    if(!this.isModified(password)) return next();

    this.password = bcrypt.hash(this.password, 10);
    next();
})

// Method to compare passwords during login
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password);
}

// Method to generate an access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// Export the Mongoose user model
export const USER = mongoose.model('USER', userSchema)
