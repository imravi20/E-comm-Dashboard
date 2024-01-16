// const express=require('express'); //common js--type-es5 by default
// const colors=require('colors');

import express from 'express';  //type-module in pac.json  es6
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import router from './routes/authRoute.js';

//configure env
dotenv.config(); //add path if env file is not in root file

//database config
connectDB();

//rest object
const app=express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',router);

//rest api
app.get('/',(req,res)=>{      // /-homepage
    res.send(/*{
        "message":'Welcome to Ecommerce App'  //json object
    }*/
    "<h1>Welcome to ecommerce app</h1>")
})

//ports
// const PORT=8080;
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.blue);
});