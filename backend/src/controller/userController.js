import { StatusCodes } from 'http-status-codes';
import { signinUserService, signUpService } from '../services/userService.js';

export const signup = async (req, res) => {
    try {
        // Validate request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Request body is required'
            });
        }

        const result = await signUpService(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User created successfully',
            data: result
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
        // Validate request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Request body is required'
            });
        }

        const result = await signinUserService(req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'User signed in successfully',
            data: result
        });
    } catch (error) {
        console.error('Signin error:', error);
        return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || 'Error signing in'
        });
    }
};