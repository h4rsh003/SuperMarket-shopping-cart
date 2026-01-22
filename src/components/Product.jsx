import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast";
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ item }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to Cart");
    }
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className='group relative flex flex-col justify-between h-[400px] w-full
        bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-lg
        transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2'>
            
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'/>

            <div className='h-[55%] w-full bg-white p-5 relative overflow-hidden flex justify-center items-center'>
                <img 
                    src={item.image} 
                    alt="item" 
                    className='h-full w-full object-contain transition-transform duration-500 group-hover:scale-110' 
                />
            </div>

            <div className='flex flex-col justify-between p-4 h-[45%] bg-slate-950 relative z-20'>
                
                <div>
                    <h1 className='text-slate-100 font-bold text-md leading-tight h-10 overflow-hidden text-ellipsis display-webkit-box line-clamp-2 mb-1 group-hover:text-cyan-400 transition-colors duration-300'>
                        {item.title}
                    </h1>

                    <p className='text-slate-500 text-[10px]'>
                        {item.description.split(" ").slice(0, 10).join(" ") + "..."}
                    </p>
                </div>

                <div className='flex justify-between items-center mt-2'>
                    {/* Price */}
                    <span className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400'>
                        ${item.price}
                    </span>

                    {
                        cart.some((p) => p.id === item.id) ? 
                        (
                            <button
                                className='group/btn relative px-4 py-1.5 rounded-full bg-slate-800 text-red-400 border border-slate-700
                                font-bold text-[10px] uppercase tracking-wider transition-all duration-300
                                hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                onClick={removeFromCart}>
                                Remove
                            </button>
                        ) : 
                        (
                            <button
                                className='relative px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                                font-bold text-[10px] uppercase tracking-wider shadow-md shadow-cyan-500/20
                                hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300'
                                onClick={addToCart}>
                                Add To Cart
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;