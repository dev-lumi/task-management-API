import express from 'express'
import router from './routes/basicRoute.js';
import mongoose from 'mongoose';

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/basicRevise").then(()=>{console.log("mongodb connected")})

app.use('/',router)


app.listen(3000,()=>console.log("server is running..."));