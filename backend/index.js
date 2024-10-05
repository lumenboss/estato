import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=> console.log("Successful connection to mongodb")
).catch((err)=> console.log(err));

const app = express()

app.listen(3000, () => console.log("express server running on port 3000"));
// Q1EyAfrtbePODgsK