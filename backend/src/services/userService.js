import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../repositories/userRepository.js';

export const signUpService = async (user) => {
    try {
        // Validate required fields
        if (!user.username || !user.email || !user.password) {
            throw {
                status: 400,
                message: "Username, email, and password are required"
            }
        }

        // Check if user already exists
        const existingUser = await findUserByEmail(user.email);
        if (existingUser) {
            throw {
                status: 400,
                message: "User with this email already exists"
            }
        }

        const newUser = await createUser(user);
        console.log(newUser);
        return newUser;
    } catch (error) {
        console.log('service error', error);
        throw error;
    }
}

export const signinUserService = async (userDetails) => {
    try {
        // Validate required fields
        if (!userDetails.email || !userDetails.password) {
            throw {
                status: 400,
                message: "Email and password are required"
            }
        }

        // Check if there is a valid registered user with the email
        const user = await findUserByEmail(userDetails.email);
        if (!user) {
            throw {
                status: 400,
                message: "User not found"
            }
        }

        // Compare the password
        const isPasswordValid = bcrypt.compareSync(userDetails.password, user.password);
        if (!isPasswordValid) {
            throw {
                status: 401,
                message: "Invalid password"
            }
        }

        return user;
    } catch (error) {
        throw error;
    }
}