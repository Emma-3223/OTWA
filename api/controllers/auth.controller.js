import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, hashedPassword });

    try {
        // Save to the Database
        await newUser.save()
        res.status(201).json('User Created Successfully');
    } catch (error) {
        next(error)
    }




}