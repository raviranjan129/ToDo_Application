import { StatusCodes } from 'http-status-codes';
import { signinUserService, signUpService } from '../services/userService.js';

export const signup = async (req, res) => {
    try {
       

        const user = await signUpService(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User created successfully',
            data: user
        });
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || 'Error creating user'
        });
    }
};

export const signin = async (req, res) => {
    try {
       

        const user = await signinUserService(req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'User signed in successfully',
            data: user
        });
    } catch (error) {
        console.error('Signin error:', error);
        return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || 'Error signing in'
        });
    }
};