import React from 'react';
import { Link} from 'react-router-dom';


function HomePage(props) {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables smooth scrolling
    });

    return (
        <main className='h-full mt-36'>
            
        
         <img className="h-screen w-screen absolute" src="https://www.jiwa.in/cdn/shop/files/healthy_oats_range_of_organic_product-healthy_start-jiwa_1944x.jpg?v=1670236329" alt="" />
    
         <h1 className='relative p-24 text-4xl text-white'>Organic & <br/> Eco Natural Products</h1>
         <Link className='text-xl px-16 py-6 relative ml-24 border border-white text-white rounded-lg hover:bg-amber-800' onClick={scrollTo} to={'/signup'}>Signup</Link>

         <h1 className='mt-72 text-center text-4xl p-8 text-amber-800'>Explore Our Products</h1>
         <p className='text-center text-xl text-green-700 p-4'>HubOrg products are an innovative, value-added solution in the packaged food space. With us, make the shift to health with ease.</p>
         <div className='grid grid-cols-4 gap-4 justify-center m-4'>
            <section><img className='rounded-lg'  src="https://www.jiwa.in/cdn/shop/files/YUC_JIWA_Website_2021-_category_image_261x261_organic_360x.jpg?v=1634788717" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Organic</p></section>
            <section><img className='rounded-lg' src="https://www.jiwa.in/cdn/shop/files/Oats_50139ad7-bfd6-4079-91ab-a5274edc7ea2_360x.jpg?v=1633934168" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Oats</p></section>
            <section><img className='rounded-lg' src="https://www.jiwa.in/cdn/shop/files/Organic_3e961b4a-b54e-405e-ab4f-5a964d8bfd7e_360x.jpg?v=1633934049" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Snackible</p></section>
            <section><img className='rounded-lg' src="https://www.jiwa.in/cdn/shop/files/Healthy_Attas_360x.jpg?v=1633934007" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Healthy Attas</p></section>
            <section> <img className='rounded-lg'  src="https://amala.earth/cdn/shop/products/6cylinderloofah-3_600x.jpg?v=1656071666" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Naturals</p></section>
            <section><img className='rounded-lg' src="https://sustainkart.com/cdn/shop/products/UltimateEcoBundleHappinessGiftPack_1169x.jpg?v=1620384053" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Eco</p></section>
            <section><img className='rounded-lg' src="https://amala.earth/cdn/shop/products/Coir-3x4-pack-of-5_1800x_bc75214d-98ba-4e0b-9166-f6a16b17dbbb_600x.png?v=1696310100" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Coconuts</p></section>
            <section><img className='rounded-lg' src="https://amala.earth/cdn/shop/files/43879251116189-0-3_1_2bd71854-1ad0-4d25-89b6-ef2b4452781e_600x.jpg?v=1708430127" alt="" />
            <p className='bg-amber-800/75 text-white  flex justify-center -mt-10 opacity-75 font-bold rounded-b-lg p-2'>Cottons</p></section>
            
         
         </div>

         



         <div>
            <div>
                <div>

                </div>
            </div>
         </div>
<video className='w-full h-full mt-20' src="nt.mp4" controls ></video>
<img className='w-full' src="https://img.freepik.com/premium-photo/plant-growing-out-hole-ground_181083-567.jpg?w=996" alt="" />

<p className='text-center text-xl p-8 text-gray-800'>In the Spotlight</p>


<div className='flex flex-row justify-center p-12 mb-32 gap-4 bg-amber-400/75'>
    <section><img className='border-4 border-amber-700 rounded-full p-2' src="/natural.png" alt=""/> 
    <p className='flex items-center justify-center text-amber-900 font-bold'>100% Natural</p>
    </section>
    
  <section><img className='border-4 border-amber-700 rounded-full p-2'  src="/certi.png" alt="" />
  <p className='flex items-center justify-center text-amber-900 font-bold'>Approval</p>
  </section>
  <section><img className='border-4 border-amber-700 rounded-full p-2 ' src="/quality.png" alt="" />
  <p className='flex items-center justify-center text-amber-900 font-bold'>100% Quality</p>
  </section>
    
   
</div>

<img src="https://www.jiwa.in/cdn/shop/files/salads-stay_fit_stay_stylish-use_code50_offer-jiwa_1944x.jpg?v=1670235456" alt="" />

        
        </main>

    );
}

export default HomePage;