import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) =>{
    const {username, email, password} = req.body;
    const hashPass = bcrypt.hashSync(password, 10);
    const newUser = new User({username, email, password: hashPass });
    try{
        await newUser.save();
        res.status(201).json('User created successfully');
    }
    catch(error){
        next(error);
    }
}
export const signin = async (req, res, next)=>{
    const { email, password } = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser)
        {
            return next(errorHandler(404, 'User not found'));
        }
        const validPass = bcrypt.compareSync(password, validUser.password);
        if(!validPass)
                next(errorHandler(401, 'Wrong credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY);
        const {password:pass,  ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    }
    catch(error){
        next(error)
    }
}