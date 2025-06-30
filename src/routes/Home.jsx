import React from 'react';
import { Link} from 'react-router-dom';


function HomePage(props) {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables smooth scrolling
    });

    return (
        <main className='mt-36'>
            
        
         <img className="w-screen absolute" src="https://www.jiwa.in/cdn/shop/files/healthy_oats_range_of_organic_product-healthy_start-jiwa_1944x.jpg?v=1670236329" alt="" />
    
         <h1 className='relative lg:p-24 lg:text-4xl text-white'>Organic & <br/> Eco Natural Products</h1>
         <Link className='lg:text-xl lg:px-16 lg:py-6 relative lg:ml-24 border border-white text-white rounded-lg hover:bg-amber-800 ' onClick={scrollTo} to={'/signup'}>Signup</Link>

         <h1 className='lg:mt-72 sm:-mt-96 text-center text-4xl p-8 text-amber-800'>Explore Our Products</h1>
         <p className='text-center text-xl text-green-700 p-4'>HubOrg products are an innovative, value-added solution in the packaged food space. With us, make the shift to health with ease.</p>
         <div className='grid lg:grid-cols-4 gap-4 justify-center m-4'>
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
            <section><img className='rounded-lg h-full' src="data:image/jpeg;base64,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" alt="" />
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

<img className='w-full' src="https://img.freepik.com/premium-photo/plant-growing-out-hole-ground_181083-567.jpg?w=996" alt="" />

<p className='text-center text-xl p-8 text-gray-800'>In the Spotlight</p>


<div className='flex flex-row justify-center p-12 gap-4 bg-amber-400/75'>
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