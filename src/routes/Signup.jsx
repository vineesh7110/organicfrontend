import React from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { addUser } from '../features/auth/authSlice';


function SignupPage(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const handlesignup = (e) =>{
   e.preventDefault()
    const form = e.target 
    const name = form['name'].value
    const email = form['email'].value
    const password = form['password'].value
    
    axios.post('http://localhost:3000/users/signup',{name,email,password},{withCredentials:true})
.then(data=>{
  const user = (data.data.user)
 dispatch(addUser(user))
navigate('/login')
})
.catch(err =>{
  console.log(err)
})


  }
    return (
        <main className="h-screen mt-36">
        <section className="h-full flex flex-col items-center justify-center -mt-14">
     <form className="flex flex-col p-8  shadow-lg shadow-amber-800/100 rounded-lg w-96 h-34" onSubmit={handlesignup}>
     <h1 className='text-center text-amber-800 font-bold text-3xl mb-8 font-mono'>Signup</h1>
     <label className='text-amber-800 ' htmlFor="name">Name</label>
<input className="boder-none mt-2 mb-4 p-2 border-b-2 border-amber-800 focus:outline-none" type="text" name="name" id="name"/>
<label className='text-amber-800 ' htmlFor="email">Email</label>
<input className="boder-none mt-2 mb-4 p-2 border-b-2 border-amber-800 focus:outline-none" type="email" name="email" id="email"/>
<label className='text-amber-800 ' htmlFor="password">Password</label>
<input className="boder-none mt-2 mb-4 p-2 border-b-2 border-amber-800 focus:outline-none" type="password" name="password" id="password"/>
<button className="bg-amber-800 text-white rounded-md p-2 font-bold">Login</button>
</form>
</section>
</main>
    );
}

export default SignupPage;