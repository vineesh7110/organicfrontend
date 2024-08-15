import React,{useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";
import { selectCartCount } from '../features/auth/cartSlicce';

function Root(props) {


      window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables smooth scrolling
    });

const [drawerVisible,setDrawerVisible] = useState(false);

    const user = useSelector(state => state.auth.user);
const cartCount = useSelector(selectCartCount);
    const location = useLocation();

    


    return (
        <>



            <div className='relative'>

                <div className={`fixed top-17 right-0 w-9/12 h-full z-10 transition-all duration-300 ${drawerVisible?`translate-x-0`:`translate-x-full`} bg-white shadow-2xl flex flex-col justify-center items-center`}>
                    <button className='absolute top-5 right-5' onClick={()=>{setDrawerVisible(false)}}>
                    <img className='w-6 h-6' src="close.png" alt="" />
                    </button>

                    <nav >
                        <ul className='flex flex-col items-center'>
                            <li className="p-4 font-bold">
                                <Link className={`${location.pathname === '/' ? 'border-b-2 border-amber-500':''}`}  onClick={()=>{setDrawerVisible(false)}}  to={"/"} >HOME</Link>
                            </li>
                            <li className="p-4 font-bold">
                                <Link className={`${location.pathname === '/products' ? 'border-b-2 border-amber-500':''}`} onClick={()=>{setDrawerVisible(false)}} to={"/products"} >PRODUCTS</Link>
                            </li>
                            <li className="p-4  font-bold">
                                <Link className={`${location.pathname === '/process' ? 'border-b-2 border-amber-500':''}`} onClick={()=>{setDrawerVisible(false)}} to={"/process"}  >PROCESS</Link>
                            </li>
                            <li className="p-4  font-bold">
                                <Link className={`${location.pathname === '/wholesale' ? 'border-b-2 border-amber-500':''}`}onClick={()=>{setDrawerVisible(false)}} to={"/wholesale"} >WHOLESALE CLUB</Link>
                            </li>
                            <li className="p-4  font-bold">
                                <Link className={`${location.pathname === '/contact' ? 'border-b-2 border-amber-500':''}`} onClick={()=>{setDrawerVisible(false)}} to={"/contact"}  >CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>
                </div>


<div className='fixed z-10 top-0 w-full'>
                <div className="bg-amber-400/75 text-center p-1 items-center justify-center flex text-amber-950 font-bold ">FREE SHIPPINGOn all orders over Rs. 750/- </div>
                <header className='flex flex-row justify-between border-b h-28 items-center justify-center p-4 bg-white '>
                    <Link to={'/'} className="flex flex-row "><img className='w-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnZ6ONCL0uWxhHTyapkGI4YoNwcMoT9JbNw&s" alt="" /><span className='text-red-700 mt-5 -ml-4 font-bold text-2xl'>ORG</span></Link>

                    <nav className='hidden lg:block'>
                        <ul className='flex flex-row gap-10 text-amber-800 font-bold '>
                            <li className='hover:text-amber-500' >
                                <Link className={`${location.pathname === '/' ? 'border-b-2 border-amber-500':''}`} onClick={scrollTo} to={"/"} >H<span className='text-amber-500'>O</span>ME</Link>
                            </li>
                            <li  className='hover:text-amber-500'>
                                <Link className={`${location.pathname === '/products' ? 'border-b-2 border-amber-500':''}`} onClick={scrollTo} to={"/products"}>PR<span className='text-amber-500'>O</span>DUCTS</Link>
                            </li>
                            <li className='hover:text-amber-500'>
                                <Link className={`${location.pathname === '/process' ? 'border-b-2 border-amber-500':''}`} onClick={scrollTo} to={"/process"}  >PR<span className='text-amber-500'>O</span>CESS</Link>
                            </li>
                            <li className='hover:text-amber-500'>
                                <Link className={`${location.pathname === '/wholesale' ? 'border-b-2 border-amber-500':''}`} onClick={scrollTo} to={"/wholesale"}  >WH<span className='text-amber-500'>O</span>LESALE CLUB</Link>
                            </li>
                            <li className='hover:text-amber-500'>
                                <Link className={`${location.pathname === '/contact' ? 'border-b-2 border-amber-500':''}`} onClick={scrollTo}  to={"/contact"} >C<span className='text-amber-500'>O</span>NTACT US</Link>
                            </li>
                        </ul>
                    </nav>


                    <ul className='flex flex-row gap-4'>

                        <button className='lg:hidden' onClick={()=>{setDrawerVisible(true)}}><img src='menu.png' alt=''/></button>
                        <li>
                            {user ? <span className='w-8 h-8 rounded-full bg-gray-400 flex flex-row items-center justify-center text-2xl'>{user.name.charAt(0)}</span> : <Link to={"/login"}><img className='w-7' src="account.png" alt='' /></Link>}
                        </li>
                        <li>
                            <Link to={"#"}><img className='w-7' src="search.png" alt='' /></Link>
                        </li>
                        <li className='flex flex-row'>
                            <Link to={"/cart"}><img className='w-7' src="cart.png" alt='' /></Link>
                            <span className='text-xs text-red-500 font-bold'>{cartCount}</span>
                        </li>
                       
                    </ul>

                </header>
            </div>

                <Outlet />

                <footer className="bg-amber-400/75 text-amber-950">

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  p-20 '>
                        <section className='grid grid-row'>
                            <Link className='font-bold mb-4'>BUSINESS</Link>
                            <Link to={'/wholesale'}>Bulk & Wholesale</Link>
                            <Link>Terms & Conditions</Link>
                        </section>

                        <section className='grid grid-row'>
                            <Link className='font-bold mb-4'>POLICIES</Link>
                            <Link>Shipping & Cancellation</Link>
                            <Link>Returns & Refund</Link>
                            <Link>Privacy Policy</Link>
                        </section>
                        <section className='grid grid-row mb-4'>
                            <Link className='font-bold mb-4'>USEFULLINKS</Link>
                            <Link>About Us</Link>
                            <Link to={'/process'}>Process</Link>
                            <Link to={'/contact'}>Contact Us</Link>
                        </section>
                        <section className='grid grid-row'>
                            <Link className='font-bold mb-4'>GET IN TOUCH</Link>

                            <div className='grid grid-cols-5'>
                                <Link className=''><AiFillFacebook /></Link>
                                <Link><AiFillTwitterCircle /></Link>
                                <Link><AiOutlineWhatsApp /></Link>
                                <Link><AiFillYoutube /></Link>
                                <Link><AiFillGoogleCircle /></Link>
                                <input className='w-56 rounded-md p-1' type='text' placeholder='Enter your mail'/>
                            </div>
                        </section>



                    </div>


                    <div className='bg-amber-950 text-amber-300 text-center w-full'>©2024 HubOrg India Pvt Ltd | Organic Products | All rights reserved</div>
                </footer>
            </div>
        </>
    );
}

export default Root;