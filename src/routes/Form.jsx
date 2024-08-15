import React, { useState } from 'react';
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { addUser } from '../features/auth/authSlice';


function FormPage(props) {
    const [success,setsuccess] = useState(false)

    const dispatch = useDispatch()
    const handleform = (e) =>{
        e.preventDefault()
        setsuccess(true)
        const form = e.target 
        
        const email = form['email'].value
        const country = form['country'].value
        const firstname = form['firstname'].value
        const lastname = form['lastname'].value
        const address = form['address'].value
        const apartment = form['apartment'].value
        const city = form['city'].value
        const state = form['state'].value
        const pincode = form['pincode'].value
        const phone = form['phone'].value

        axios.post('http://localhost:3000/form',{email,country,firstname,lastname,address,apartment,city,state,pincode,phone},{withCredentials:true})
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
        <main className='h-full mt-36'>

            <form className='grid grid-cols-2' onSubmit={handleform}>

                <section >

                    <div className='flex flex-row justify-between items-center justify-center p-4'>
                        <h1 className='text-2xl font-bold'>Contact</h1>
                        <Link to={'/login'}>Log in</Link>
                    </div>


                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' placeholder='Email' type="email" name="email" id="email" />
                    </div>

                    <div className='m-4'>
                        <h1 className='p-2 text-2xl font-bold'>Delivery</h1>
                        <input className='w-full p-4 rounded-md border border-gray-400' placeholder='Country/region' type="text" name="country" id="country" />
                    </div>

                    <div className='grid grid-cols-2 m-4 gap-2'>
                        <input className='w-full p-4 rounded-md border border-gray-400' placeholder='First Name' type="text" name="firstname" id="name" />
                        <input className='w-full p-4 rounded-md border border-gray-400' type="text" placeholder='Last Name' name="lastname" id="lastname" />
                    </div>

                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' placeholder='Address' type="text" name="address" id="address"/>
                        <input className='w-full p-4 rounded-md border border-gray-400 mt-2'  placeholder='Apartment,suite,etc.(optional)' type="apartment" name="apartment" id="apartment" />
                    </div>

                    <div className='grid grid-cols-3 m-4 gap-2'>
                        <input className='w-full p-4 rounded-md border border-gray-400'  placeholder='City' type="text" name="city" id="city" />
                        <input className='w-full p-4 rounded-md border border-gray-400'  placeholder='State' type="text" name="state" id="state" />
                        <input className='w-full p-4 rounded-md border border-gray-400'  placeholder='PIN Code' type="text" name="pincode" id="pincode"/>
                    </div>

                    <div className='m-4'>
                        <input className='w-full p-4 rounded-md border border-gray-400' type="tel" placeholder='Phone'  name="phone" id="phone" />
                    </div>

                    <div className='m-4'>
                        <h1 className='text-lg font-bold mb-4 p-2'>Shipping Method</h1>
                        <div className='w-full p-4 rounded-md bg-gray-100 border-gray-400 text-gray-500' >Enter your shipping address to view available shipping methods</div>
                        
                    </div>

                    <div className='m-4'>
                        <h1 className='text-2xl mb-4 font-bold'>Payment</h1>
                        <p className='p-2'>All transactions are secure and encrypted.</p>

                        <div  className='w-full p-4 rounded-md border border-gray-400 flex flex-row justify-between'  >
                        <p>Cards, UPI, NB, Wallets, BNPL by PayU India</p>
                         
                        
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="visa.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="PaytmIMG.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="rupay.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="master.png" alt="" />
                        <img className='w-8 h-5  border border-gray-400 rounded-sm' src="Googlepay.png" alt="" />
                       
                        </div> 
                        <section className='border flex flex-col items-center justify-center bg-gray-100' >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpjN7K7ebxchReP9n1xDmEyDoDC6NXtb7ow&s" alt="" />
                            <p className='m-4'>After clicking “Pay now”, you will be redirected to Cards, UPI, NB,<br /> Wallets, BNPL by PayU India to complete your purchase securely</p>
                        </section>
                    </div>


                    <div className='m-4'>
                        <h1 className='mb-2 font-bold'>Billing Address</h1>
                       <div className='w-full p-4 rounded-md border border-gray-400 mb-2' ><input type="checkbox" /> Same as shiping address </div>
                       <div className='w-full p-4 rounded-md border border-gray-400'>  <input type="checkbox" /> Use a different billing address</div>
                    </div>

                    <div className='flex items-center justify-center p-4'>
                        <button className='text-white text-lg font-bold bg-black rounded-md w-full p-4'>{success?'SENDING Success...':`Pay now`}</button>
                    </div>
                </section>











                <section className=''></section>
            </form>



        </main>
    );
}

export default FormPage;