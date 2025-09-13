import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'
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

// route for signin
export const signin = async(req,res,next) =>{
    const {email, password} = req.body;
    if (!email || !password || !email === '' || password === ''){
        next(errorHandler(400, "All fields are required!"))
    };

    try {
        const validUser = await user.findOne({ email });
        if (!validUser){
            return next(errorHandler(404,"User not found"));
        }
        const validPassword = bcrypt.compareSync(password,validUser.password);
        if (!validPassword){
            return next(errorHandler(400,"Invalid Password"))
        };

        // authenicate user if it's correct
        const token = jwt.sign(
            {id : validUser._id}, process.env.JWT_SECRET, {expiresIn:'1d'}
        )
        const {password:pass, ...rest} = validUser._doc;
        // cookie
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(rest)

    } catch (error) {
        next(error)
    }
}