import React from 'react';


function WholesalePage(props) {
    return (
        <main className='h-full mt-36'>
            <h1 className='text-2xl text-center  p-8 text-amber-500 font-mono'>The Need Of The Hour Is To Do Away With Middlemen And Get The Benefit Directly To Our Customers.</h1>
            <div className='p-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                <section>
                    <img className='w-full h-80 rounded-lg' src='https://media.istockphoto.com/id/1068925322/photo/organic-products-grocery-category-aisle-at-supermarket.jpg?s=612x612&w=0&k=20&c=3rEtI6KfYZm7PPM0JWX8OZo3n9OumWTE5t1QrKVWbRw=' alt='' />
                </section>
                <section className='grid justify-center items-center'>

                    <p className='text-amber-800 text-xl '><h1 className='text-amber-800 text-3xl text-center mb-4'>Why wholesellers’ club?</h1>  At HubOrg, we understand that from the smallest retail shop in the deepest corner of India to the biggest caterer, everyone has the capacity to stock & sell our Organic products.</p>

                </section>

                <section>
                    <p className='text-amber-800 text-xl '><h1 className='text-amber-800 text-3xl text-center mb-4'>About HubOrg and Wholesale proess</h1>  At Jiwa, we understand that from the smallest retail shop in the deepest corner of India to the biggest caterer, everyone has the capacity to stock & sell our healthy food products.</p>

                </section>
                <section>
                    <img className='w-full h-80 rounded-lg' src='https://media.istockphoto.com/id/1067203316/photo/woman-hand-hold-shopping-cart-with-abstract-blur-supermarket-aisle-background.jpg?s=612x612&w=0&k=20&c=e5BYg4lICeATDRfxVVAm13a7587ElhnI15phCWtFzyc=' alt='' />
                </section>

            </div>
            {/* */}
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-8 gap-4'>
                <section>
                    <img className='w-full h-80 rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkiKPrzM6DPd09FhujK90kjgzYB676_notg&s' alt='' />
                    <div className='w-72 bg-gray-200 p-4 mt-8 rounded-lg'>
                        <h1 className='text-3xl mb-4'>Other benefits</h1>
                        <p className=' ml-8'>GST billing<br/>
                            Free shipping<br/>
                          Quantity based deep discounts<br/>
                             Amount based deep discounts
                            </p>
                    </div>
                </section>

                <section>
                    <h1 className=' p-4 mb-8 text-3xl text-amber-800 font-bold '>The Idea Is To Make The Process Simple And Smooth.</h1>
                    <div className='w-full bg-amber-400 p-4 rounded-lg text-amber-800 text-xl'>
                        <p className='m-4'>Big or small Retail shops, Exporters, Catering companies, Horeca supply chain, and any business with a demand for wholesome food products will benefit from this club</p>
                        <p className='m-4'>The idea is to make the process simple and smooth.</p>
                        <p className='m-4'>All Jiwa products can be ordered directly from the website, no enrolment or membership required.</p>
                        <p className='m-4'>The direct interaction with us enhances your experience as a buyer & ensures transparency.</p>
                        <p className='m-4'>The retailer receives the freshest product from the latest production batch.</p>
                        <p className='m-4'>Furthermore, benefits such as GST billing, free shipping, Quantity & Amount based deep discounts increase profitability and benefit businesses of any size and structure.</p>

                    </div>
                </section>
            </div>


        </main>
    );
}

export default WholesalePage;