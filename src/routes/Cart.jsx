
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, removeItem, selectCartItems, selectTotalAmount } from '../features/auth/cartSlicce'



function CartPage() {
    
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const userId = '65e4f4abcd720f8ca76196f1';  // Replace with actual user ID
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/${userId}`);
                dispatch(setCartItems(res.data.items));
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        fetchCart();
    }, [dispatch]);

    const handleRemoveFromCart = async (itemId) => {
        try {
            const userId = '65e4f4abcd720f8ca76196f1';  // Replace with actual user ID
            await axios.delete(`${import.meta.env.VITE_API_URL}/cart/delete/${itemId}`, { data: { userId } });
            dispatch(removeItem({ id: itemId }));
            alert('Item removed from cart successfully!');
        } catch (err) {
            console.error('Error removing item from cart:', err);
            alert('Failed to remove item from cart.');
        }
    };
    

    return (
        <main className='h-full mt-36'>
          
        <h2 className='text-4xl mb-8 flex justify-center text-amber-700 mt-4 font-semibold p-2'>HubOrg Cart</h2> 
            {cartItems.length === 0 ? (
                <p className='text-lg'>Your cart is empty.</p>
            ) : (
                <ul className='space-y-4 lg:ml-56 lg:mr-56 sm:-ml-56 sm:-mr-56 sm:p-2' >
                    {cartItems.map(item => (
                        <li key={item._id} className='flex flex-col md:flex-row items-center bg-white shadow-lg shadow-amber-800/100 rounded-lg p-4'>
                           
                            <div className='flex-1'>
                            <img src={item.image} alt={item.name} className='w-64 h-64 md:w-32 md:h-32 object-cover rounded-md mb-4 md:mb-0 md:mr-4' />
                                <h3 className='text-xl font-semibold'>{item.title}</h3>
                                
                                <p className='text-amber-800/75 font-bold'>{item.price}</p>
                                <div className='mt-2'>
                                    <label className='block mb-1'>Quantity:</label>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value, 10))}
                                        className='border border-gray-300 rounded-md px-1 py-1 w-20'
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item._id)}
                                className='bg-red-500 text-white px-4 py-2 rounded-md mt-4 md:mt-0 md:ml-4'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h2 className='text-2xl font-bold mt-8 p-2'>Total Amount: ${totalAmount}</h2>
            <Link className='flex items-center justify-center' to={'/form'}>   
                <button className='flex mt-8 mb-6 bg-amber-600 text-white px-6 py-3 hover:bg-green-700'>
                    CHECK OUT
                </button>
            </Link>
        </main>
    );
}

export default CartPage;



 