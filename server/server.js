const express= require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create the databse connection //we can create also the separe file and we can import that here

mongoose.connect('mongodb+srv://janardhanborse2003:Jayesh4102003@reactorfit.3olae4r.mongodb.net/?retryWrites=true&w=majority&appName=ReactorFit'

).then(()=>console.log("MongoDB connected")).catch(error=>console.log("error !!"));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);


app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log("Server is running on localhost:5000"));