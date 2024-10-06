import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/user.routes.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=> console.log("Successful connection to mongodb")
).catch((err)=> console.log(err));

const app = express()
app.use(express.json());
app.use('/auth', userRouter);

app.get("/", (req, res)=>{res.json("This is so good")});

app.listen(3000, () => console.log("express server running on port 3000"));
// Q1EyAfrtbePODgsK