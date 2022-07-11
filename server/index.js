import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);   //this means every route inside the postRoutes will start from posts.js

const MONGODB_CONNECTION_URL="mongodb+srv://ketaki:smriti%2367@cluster0.3k6kprv.mongodb.net/?retryWrites=true&w=majority";  //url encoding for replacing # in password to %23
const PORT=process.env.PORT || 5000;

mongoose.connect(MONGODB_CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=> console.log(`Server is listening on port: ${PORT}`))) //If connection to the mongodb database is successfull
    .catch((error)=>console.log(error.message));    //if connection is unsucessfull



