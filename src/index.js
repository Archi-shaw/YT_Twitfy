// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';
import dotenv from 'dotenv'
import Connectdb from './db/index.js'
import { app } from './app.js'
dotenv.config({
    path: './env'
})

Connectdb()
// after connecting we nedd to listen this on port 
.then(() =>{
      app.listen(process.env.PORT || 8000 , () => {
          console.log(`⚙️  Server is running on port : ${process.env.PORT}`)
      })
      app.on("error",(error) => {
        console.log("Connection error",error)
        throw error;
      })
})
.catch((error) => {
    console.log("MONGO_DB CONNECTION FAILED!!",error);
})














// const app = express();

// ;(  async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(error) =>{
//             console.log('ERROR',error);
//             throw error
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`App is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR",error);
//         throw error
//     }
// }
// )()