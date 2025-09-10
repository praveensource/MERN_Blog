import express from "express"
import mongoose from "mongoose";
import dontenv from 'dotenv'
import userRoutes from './routes/user.route.js'


dontenv.config();


mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("MONGO is connected!!")
    }
).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3000,()=>{
    console.log("Server is Running!!!")
});

app.use('/api/user', userRoutes);