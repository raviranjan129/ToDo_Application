import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/apis/useSignup';
import { SignupCard } from './SignupCard';

export const SignupContainer = () => {
    const navigate = useNavigate();
    
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        username: ''
    });

    const [validationError, setValidationError] = useState(null);

    const { isPending, isSuccess, error, signupMutation } = useSignup();

    async function onSignupFormSubmit(e) {
        e.preventDefault();
        console.log('Signup form submitted', signupForm);

        if(!signupForm.email || !signupForm.password || !signupForm.username) {
            console.error('All fields are required');
            setValidationError({ message: 'All fields are required' });
            return;
        }

        setValidationError(null);

        await signupMutation({
            email: signupForm.email,
            password: signupForm.password,
            username: signupForm.username
        });
    }

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/users/signin');
            }, 2000);
        }
    }, [isSuccess, navigate]);

    return (
        <SignupCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signupForm={signupForm} 
            setSignupForm={setSignupForm} 
            validationError={validationError} 
            onSignupFormSubmit={onSignupFormSubmit}
        />
    );
}; 