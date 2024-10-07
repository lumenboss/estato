import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.models.js";
import { errorHandler } from '../utils/error.js';

const userController = {
    signUp: async (req, res, next) =>{
        const {username, email, password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 12)
        try {
        const user = await User.create({username, email, password:hashedPassword});
        res.status(201).json(user);   
        } catch (error) {
            next(error)
            
        }
    },
    signIn: async(req, res, next) =>{
        
        try {
            const {email, password} = req.body;
            console.log(email, password)
            const validUser = await User.findOne({email});
            if(!validUser){
                return errorHandler(404, "No such account associated with this email address.");
            }
            const validPassword = bcryptjs.compareSync(password, validUser.password);
            if(!validPassword){
                return errorHandler(401, "Wrong credentials");
            }
            const jwtToken = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY);
            const {password: pass, ...rest} = validUser._doc  // destructuirng password from response object
            res.cookie('access_token', jwtToken, {httpOnly: true, expires: new Date(Date.now() + 24 * 60 *60 * 2)}).status(200).json(rest);
        } catch (error) {
            next(error);
        }

    }
}

export default userController;
