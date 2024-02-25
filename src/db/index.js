import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'


const connectDB = async () => {
     try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected successfully `)
     } catch (error) {
        console.log("Database Faild to connect : ",error);
        process.exit(1);
     }
}

export default connectDB;