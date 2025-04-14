import User from "../schema/userSchema.js";


export const createUser=async (user)=>{
    try {
        const newUser=await User.create(user);
        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findUserByEmail = async(email)=>{
    try{
    const user = await User.findOne({email});
    return user;
    }catch(error){
        console.log(error);
    }
    }


    export const getById=async(id)=>{
        try {
            const user=await User.findById(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }