import React from 'react';
import axios from "axios";

import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from '../features/auth/authSlice';


function LoginPage(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const handleLogin = (e) =>{
   e.preventDefault()
    const form = e.target
    const email = form['email'].value
    const password = form['password'].value

    axios.post(`${import.meta.env.VITE_API_URL}/users/login`,{email,password},{withCredentials:true})
    .then(data=>{
      const user = (data.data.user)
     dispatch(addUser(user))
    navigate('/')
    })
    .catch(err =>{
      console.log(err)
    })
    
    
      }
    return (
       
      <main className="h-screen mt-32">
      <section className="h-full flex flex-col items-center justify-center -mt-8">
      
   <form className="flex flex-col p-8 shadow-lg shadow-amber-800/100 rounded-lg w-80 h-34" onSubmit={handleLogin}>
   <h1 className='text-center text-amber-800 font-bold text-3xl mb-8 font-mono'>Login</h1>
<label className='text-amber-800 ' htmlFor="email">Email</label>
<input className="border border-amber-700 mt-2 mb-4 p-2 rounded-md" type="email" name="email" id="email"/>
<label className='text-amber-800' htmlFor="password">Password</label>
<input className="border border-amber-700 mt-2 mb-4 p-2 rounded-md" type="password" name="password" id="password"/>
<button className="bg-amber-800 text-white rounded-md p-2 font-bold">Login</button>
</form>
</section>
</main>
    );
}

export default LoginPage;