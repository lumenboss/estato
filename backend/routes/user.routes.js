import express from 'express';
import userController from '../controllers/user.controller.js';


const router = express.Router();

//sign up a user
router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);

export default router;
