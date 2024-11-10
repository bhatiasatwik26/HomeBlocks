import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

//1) loading config files
dotenv.config();

//2) connecting DB
mongoose.connect(process.env.MONGO)
    .then(()=>{console.log('Connected to DB')})
    .catch((err)=>{console.log(err.message)})
const app = express();

//3) creating express app, listening to port, mounting routes and error middleware
app.use(express.json());
app.listen(3000, ()=>{
    console.log('Server on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        sucess: false,
        statusCode,
        message
    })
})