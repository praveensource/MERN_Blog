import express from 'express';
import mongoose from 'mongoose';
import dontenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dontenv.config();

mongoose.connect(
    process.env.MONGO
).then(
    ()=>{console.log("Mongo is connected")}
)
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on 3000")
});

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);

// middleware to handle errors
app.use((err, req,res, next) => {
    const statusCOde =err.statusCOde || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCOde).json({
        success:false,
        statusCOde,
        message
    });
})