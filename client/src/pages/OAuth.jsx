import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react';
import { app } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { signInStart, signInFail, signInSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); 
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo: result.user.photoURL
                })
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        }
        catch(error){
            console.log(error);
            dispatch(signInFail(error.message));
        }
    }
    return (
        <button type='button' onClick={handleClick} className='bg-green-700 text-white p-3 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'>{false ? 'Validating' : 'Continue with Google'}</button>
    )
}

export default OAuth;