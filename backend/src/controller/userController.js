import { StatusCodes } from 'http-status-codes';
import { signinUserService, signUpService } from '../services/userService.js';


export const signup = async (req, res) => {
    try {
        const user = await signUpService(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'user created successfully',
            data: user
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error creating user', error: error.message });
    }
};

export const signin = async (req, res) => {
    try {
        const user = await signinUserService(req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "user signin sucessfully",
            data: user,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error signing in', error: error.message });
    }
};