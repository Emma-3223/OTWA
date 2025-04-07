import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();


// Connecting the server to the backend
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    });

// App port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})









