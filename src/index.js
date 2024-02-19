import dotenv from 'dotenv';
import mongoose from 'mongoose'
import {DB_NAME} from './constants.js';
import express from 'express';
const app = express();

import connectDB from './db/index.js'

dotenv.config({
    path: './env'
});

connectDB();






// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         .then(()=>{
//             console.log("connected to database sussfully")
//         })
//             app.on("error : ",(error)=>{
//                 console.log("error : ",error)
//                 throw error;
            
//             })
//             app.listen(process.env.PORT,()=>{
//                 console.log(`App is listning on port : ${process.env.PORT}`);
//             })
//     }catch(err){
//             console.error("error: ",err)
//             throw err
//     }

// })()