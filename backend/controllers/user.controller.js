import bcryptjs from 'bcryptjs';
import User from "../models/user.models.js";

const userController = {
    signUp: async (req, res) =>{
        const {username, email, password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 12)
        const user = await User.create({username, email, password:hashedPassword});
        res.status(201).json(user);
    },
    signIn: () =>{}
}

export default userController;
