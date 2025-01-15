import asyncHandler from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message: "ok"
    })
})

export default registerUser


 // get user details from frontened
    // validation - not empty
    // check if user already exist
    // check for images, check for avatar
    //upload them to loudinary and avatar
    //create user object  - create entry in db
    //remove password and refresh token feilds from response
    //check for user-creation
    //return re