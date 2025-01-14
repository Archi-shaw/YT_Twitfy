/// one with promise 
const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
     }
}

export default asyncHandler

// const async = () => {}
// const async = () => () => {}
// const async = () => async() => {}


// through try and catch method  
// const async = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }