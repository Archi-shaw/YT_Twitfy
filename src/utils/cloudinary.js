import {v2 as cloudinary} from 'cloudinary'
import { response } from 'express';
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilePath) => {
    try{
       if(!localfilePath) return null;
       cloudinary.uploader.upload(localfilePath ,{
        resource_type: "auto"
       })
       // file has been uploaded sucessfully
       console.log("file is uploaded on cloudinary",response.url);
       return response;
    }
    catch (error){
        fs.unlinkSync(localfilePath)  // remove the locally saved  file as the upload operation got failed
        return null;
    }
}
// Upload an image
const uploadResult = await cloudinary.uploader
.upload(
    'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }
) 
.catch((error) => {
    console.log(error);
});

console.log(uploadResult);

export {uploadOnCloudinary}