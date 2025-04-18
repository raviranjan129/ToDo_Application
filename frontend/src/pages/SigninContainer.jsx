/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SigninCard } from './SigninCard';
import { useSignin } from '../hooks/apis/useSignin';






export const SigninContainer=()=>{
    const navigate=useNavigate();

    
    const [signinForm,setSigninForm]=useState({
        email:'',
        password:''
    });

    const [validationError,setValidationError]=useState(null);

    const {isPending,isSuccess,error,signinMutation}=useSignin();

    async function onSigninFormSubmit(e) {
        e.preventDefault();
          console.log('Signin form submitted', signinForm);

          if(!signinForm.email || !signinForm.password ){
            console.log('All fields are required');
            setValidationError({message:'All fields are required'});
            return;
          }

          setValidationError(null);

        await signinMutation({
            email: signinForm.email,
            password: signinForm.password,
            
        });
    }

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/todo');
            }, 3000);
        }
            
    }, [isSuccess, navigate]);

    return(
<SigninCard
error={error}
isSuccess={isSuccess}
isPending={isPending}
signinForm={signinForm}
setSigninForm={setSigninForm}
validationError={validationError}
onSigninFormSubmit={onSigninFormSubmit}
/>
    );

};