import React,{useState} from 'react';
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { addUser } from '../features/auth/authSlice';

function ContactPage(props) {
    const [success,setsuccess] = useState(false)
       
    const dispatch = useDispatch()
    const handlecontact = (e) =>{
        e.preventDefault()
        setsuccess(true)
        const form = e.target 
        const name = form['name'].value
        const email = form['email'].value
        const phone = form['phone'].value
        const message = form['message'].value
        
        axios.post(`${import.meta.env.VITE_API_URL}/contact`,{name,email,phone,message},{withCredentials:true})
        .then(data=>{
            setsuccess(false)
          const user = (data.data.user)
         dispatch(addUser(user))
       
        })
        .catch(err =>{
            setsuccess(false)
          console.log(err)
        })


    }

    return (
        <main className='h-full mt-40'>
            <div className='bg-transparent '>
            <h1 className='text-center text-amber-800 text-3xl mb-8'>Get in touch</h1>
           <h1 className='text-center text-amber-800 text-3xl mb-8'>Tell us how you like our products, share ideas &<br/> help us make health more fun.</h1>
           <img className='w-full h-96' src="https://img.freepik.com/premium-photo/eco-friendly-bathroom-products-displayed-clear-surface_718046-6339.jpg?w=1060" alt="" />
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-12 items-center justify-center p-20'>
           <section className='grid items-center justify-center bg-amber-400 hover:bg-amber-700 hover:text-white mt-8 rounded-lg p-7 lg:-mt-28'>
<img className='w-10 mb-4' src="address.png" alt="" />
<h1>Address</h1>
<p>219,BM Complex Tb rd <br/>Mumbai 200 070</p>
           </section>
           <section className='grid items-center justify-center bg-amber-400 hover:bg-amber-700 hover:text-white mt-8 p-10 rounded-lg lg:-mt-28'>
<img className='w-10 mb-4' src="call.png" alt="" />
<h1>Support</h1>
<span>+91-62823-40776</span>
           </section>
           <section className='grid items-center justify-center bg-amber-400 hover:bg-amber-700 hover:text-white p-10 rounded-lg mt-8 lg:-mt-28'>
           <img className='w-10 mb-4' src="mail.png" alt="" />
<h1>Email Us</h1>
<span>info@Huborg.in</span>
           </section>

           </div>
           </div>


           {/* */}
           <div className='grid items-center justify-center p-4'>
<h1 className='text-center text-3xl text-amber-800'>Contact Us</h1>
<form className="grid w-full" onSubmit={handlecontact}>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
   <section className='grid'>
   <label className='text-amber-800 mt-8' htmlFor="name">NAME</label>
<input className="border border-amber-700 mt-2 mb-4 p-2 rounded-md " type="name" name="name" id="name"/>
</section>
<section className='grid lg:mt-8 sm:-mt-8'>
<label className='text-amber-800' htmlFor="password">EMAIL</label>
<input className="border border-amber-700 mt-2 mb-4 p-2 rounded-md" type="email" name="email" id="email"/>
</section>
</div>


<label className='text-amber-800' htmlFor="phone">PHONE NUMBER</label>
<input className="border border-amber-700 mt-2 mb-4 p-2 rounded-md" type="phone" name="phone" id="phone"/>

<label className='text-amber-800' htmlFor="message">MESSAGE</label>
<textarea className="border border-amber-700 mt-2 mb-4 p-2 rounded-md h-32" row="10" name="30" id="message"></textarea>

<button className="bg-amber-800 text-white rounded-md p-2 font-bold hover:bg-amber-300 hover:text-amber-900">{success?'SENDING Success...':`SEND`}</button>
<span className='p-8'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</span>

</form>
</div>

        </main>
    );
}

export default ContactPage;