import mongoose from 'mongoose';

// User Schema.
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    avatar: {
        type: String,
        default: 'https://media.istockphoto.com/id/1409715003/vector/man-avatar-placeholder-icon-design.jpg?s=612x612&w=0&k=20&c=Lk44BhYJIOpbSCYkymK0GGuziooahH0Mo_2Gzpzuw2Q=',

    }
}, { timestamps: true });

// Creating a model
const User = mongoose.model('User', userSchema);
export default User;