const asyncHandler = (reqHandler) =>{
        (err,req,res,next) => {
            Promise.resolve(reqHandler(err,req,res,next)).
            catch((err) => next(err))
        }
}

export {asyncHandler}






//This is also a way to handle it with async await instead of promise

// const asyncHandler = (fn) => async (err,req,res,next) => {
//     try{
//             await fn(err,req,res,next);
//     } catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         });
//     }
// }

// export {asyncHandler};