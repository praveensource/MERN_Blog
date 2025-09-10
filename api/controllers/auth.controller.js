import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async(req, res, next) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username==='' || email === '' || password === ''){
        next(errorHandler(500,"All fields are requried!"))
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new user({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json("Sign up success")
    } catch (error) {
       next(error);
    }
}