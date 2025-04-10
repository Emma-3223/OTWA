import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express()
app.use(express.json())
dotenv.config()

// Connecting the server to the backend
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log(err)
    })

// App port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

// Add a middle ware to handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'INternal Server error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
