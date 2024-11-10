import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInFail, signInSuccess } from '../redux/userSlice';
import OAuth from './OAuth';
const SignIn = () => {

    const [formData, setFormData] = useState({username:'', email:'', password:''});
    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });    
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if(data.sucess == false)
            dispatch(signInFail(data.message))
          else 
          {
            dispatch(signInSuccess(data));
            navigate('/home');
          }
        }
    return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7 text-slate-700'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  justify-center gap-6 max-w-[600px] mx-auto text-lg border border-slate-200 p-10 rounded-xl'>
        <input type="text" placeholder='Email' id='email' onChange={handleChange} className='border border-slate-300 p-3 rounded-lg outline-slate-400' />
        <input type="text" placeholder='Password' id='password' onChange={handleChange} className='border border-slate-300 p-3 rounded-lg outline-slate-400'/>
        <p className='text-red-500 font-semibold text-md text-center leading-tight'>{error  ? error : ""}</p>
        <button disabled={loading} className='bg-slate-700 text-white p-2 rounded-md hover:opacity-90 loading:opacity-50 loading:cursor-not-allowed'>{loading ? 'Submitting' : 'Sign Up'}</button>
        <OAuth />
        <p className='text-slate-700'>Dont have an account? <Link className='text-blue-500 underline underline-offset-2 hover:text-blue-600'>Sign-up</Link> instead</p>
      </form>
    </div>
  )
}

export default SignIn;