import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/user.routes.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=> console.log("Successful connection to mongodb")
).catch((err)=> console.log(err));

// enabling cors for client application
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  };

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', userRouter);
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
} );

app.get("/", (req, res)=>{res.json("This is so good")});

app.listen(3000, () => console.log("express server running on port 3000"));
// Q1EyAfrtbePODgsK