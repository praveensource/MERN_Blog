import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async(req, res) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username==='' || email === '' || password === ''){
        return res.status(400).json({mesage:"All fields are required!"})
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
       res.status(500).json({message:error.message});
    }
}