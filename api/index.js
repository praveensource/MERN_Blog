import express from "express"
import mongoose from "mongoose";
import dontenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dontenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("MONGO is connected!!")
    }
).catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is Running!!!")
});

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes)

// middleware to handle errors
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})