import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js';



dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR : ",error)
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`listening on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log('Failed to connect',error)
    throw error;
})




// import express from 'express';
// const app = express();
// import mongoose from 'mongoose';
// import {DB_NAME} from './constants.js';
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