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
            console.log(new Date(Date.now()).toTimeString()+': '+'Invalid User');
            return next(errorHandler(404, 'User not found'));
        }
        const validPass = bcrypt.compareSync(password, validUser.password);
        if(!validPass)
        {
            console.log(new Date(Date.now()).toTimeString()+': '+validUser.username+': Invalid Pass');
            return next(errorHandler(401, 'Wrong credentials'));
        }
        const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY);
        const {password:pass,  ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    }
    catch(error){
        next(error)
    }
}

export const google = async (req, res, next)=>{
    try{
        const user = await User.findOne({email: req.body.email });
        if(user)
        {
            const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY);
            const{password:pass, ...rest} = user._doc;
            res
                .cookie('access_token', token, {httpOnly: true})
                .status(200)
                .json(rest)
        }
        else
        {
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPass = bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: req.body.name.split(' ').join('').toLowerCase()+Date.now(),
                email:req.body.email,
                password: hashedPass,
                avtar: req.body.photo
            });
            const token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY);
            const {password:pass,  ...rest} = newUser._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }
    }
    catch(error)
    {
        next(error);
    }
}