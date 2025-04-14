import { useMutation } from '@tanstack/react-query';
import { signInRequest } from '../../apis/auth';




export const useSignin=()=>{
    

    const {isPending,isSuccess,error,mutateAsync:signinMutation}=useMutation({
        mutationFn:signInRequest,
        onSuccess:(response)=>{
            console.log('Successfully signed in ',response);
            
            const userObject =JSON.stringify(response.data);
            localStorage.setItem('user',userObject);
            
        },


        onError:(error)=>{
            console.log('Failed to sign in',error);

        }
      

    });
    

    return{
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};