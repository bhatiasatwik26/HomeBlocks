import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const SignUp = () => {

    const [formData, setFormData] = useState({username:'', email:'', password:''});
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });    
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setDisabled(true);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if(data.sucess == false)
            setError(data.message);
        else 
        {
          setError("");
          navigate('/sign-in');
        }
        setDisabled(false);
        console.log(data);
        }
    return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7 text-slate-700'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  justify-center gap-6 max-w-[600px] mx-auto text-lg border border-slate-200 p-10 rounded-xl'>
        <input type="text" placeholder='Username' id='username' onChange={handleChange} className='border border-slate-300 p-3 rounded-lg outline-slate-400 '/>
        <input type="text" placeholder='Email' id='email' onChange={handleChange} className='border border-slate-300 p-3 rounded-lg outline-slate-400' />
        <input type="text" placeholder='Password' id='password' onChange={handleChange} className='border border-slate-300 p-3 rounded-lg outline-slate-400'/>
        <p className='text-red-500 font-semibold text-md text-center leading-tight'>{error  ? error : ""}</p>
        <button disabled={disabled} className='bg-slate-700 text-white p-2 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'>{disabled ? 'Submitting' : 'Sign Up'}</button>
        <p className='text-slate-700'>Have an account? <Link className='text-blue-500 underline underline-offset-2 hover:text-blue-600'>Sign-in</Link> instead</p>
      </form>
    </div>
  )
}

export default SignUp;