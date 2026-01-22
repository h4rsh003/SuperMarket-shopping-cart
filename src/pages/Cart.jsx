import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div className='max-w-6xl mx-auto pt-28 px-4'>
            {
                cart.length > 0 ?
                    (
                        <div className='flex flex-col lg:flex-row gap-10 pb-20'>
                            
                            {/* --- LEFT SIDE: CART ITEMS --- */}
                            <div className='w-full lg:w-[60%] flex flex-col gap-6'>
                                {
                                    cart.map((item, index) => {
                                        return <CartItem key={item.id} item={item} itemIndex={index} />
                                    })
                                }
                            </div>

                            <div className='w-full lg:w-[40%] h-fit p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl sticky top-24'>
                                <div className='flex flex-col h-full justify-between gap-y-10'>
                                    
                                    {/* Header Part */}
                                    <div>
                                        <div className='text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2'>
                                            Your Cart
                                        </div>
                                        <div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 uppercase tracking-tighter'>
                                            Summary
                                        </div>
                                        <p className='mt-4 text-slate-400 font-medium text-lg'>
                                            Total Items: <span className='text-white font-bold'>{cart.length}</span>
                                        </p>
                                    </div>

                                    {/* Bottom Part */}
                                    <div className='border-t border-slate-700 pt-6'>
                                        <div className='flex justify-between items-center mb-6'>
                                            <p className='text-slate-300 font-semibold text-xl'>Total Amount:</p>
                                            <p className='text-2xl font-extrabold text-white'>
                                                ${totalAmount.toFixed(2)}
                                            </p>
                                        </div>

                                        <button className='w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                                            font-bold text-lg uppercase tracking-wider shadow-lg shadow-cyan-500/30 
                                            hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300'>
                                            Checkout Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) :
                    
                    (
                        <div className='flex flex-col items-center justify-center h-[70vh] gap-6'>
                            <div className='relative'>
                                <div className='absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full'></div>
                                <h1 className='relative text-3xl font-bold text-slate-300 z-10'>
                                    Your cart is empty!
                                </h1>
                            </div>
                            
                            <Link to={"/"}>
                                <button className='px-10 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white
                                    font-bold text-lg uppercase tracking-wider shadow-lg shadow-emerald-500/30
                                    hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300'>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart