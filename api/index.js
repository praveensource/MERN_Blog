import express from 'express';
import mongoose from 'mongoose';
import dontenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dontenv.config();

mongoose.connect(
    process.env.MONGO
).then(
    ()=>{console.log("Mongo is connected")}
)
const app = express();

app.listen(3000, () => {
    console.log("Server is running on 3000")
});

app.use('/api/user', userRoutes);