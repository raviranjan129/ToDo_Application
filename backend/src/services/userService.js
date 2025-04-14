

import bcrypt from 'bcrypt'
import { createUser, findUserByEmail } from '../repositories/userRepository.js';

export const signUpService=async (user)=>{
    try {
        const newUser=await createUser(user);
        return newUser;
    } catch (error) {
        console.log('service error',error);
    }

}



export const signinUserService=async (userDetails)=>{
    try {
        //1. chek if hter is a valid registered user with the email;

        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status:400,
                message:"User not found"
            }
        }
//2. compare the password;
console.log(userDetails.password);
console.log(user.password);
const isPasswordValid= bcrypt.compareSync(userDetails.password,user.password);
console.log(isPasswordValid)

if(!isPasswordValid){
    throw{
        status:401,
        message:"Invalid password"
    }
}


return user;
    } catch (error) {
        throw error;
    }
}