import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useSelector((state) => state);

    return (
        <div className="fixed top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-2xl transition-all duration-300">
            <nav className='flex justify-between items-center h-14 max-w-6xl mx-auto px-6'>

                <NavLink to="/">
                    <div className='group flex items-center gap-x-3 cursor-pointer'>
                        <div className="relative flex items-center justify-center p-2 rounded-full bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
                             <img 
                                src="../logo.png" 
                                className='w-8 h-8 object-contain z-10' 
                                alt="Logo" 
                            />
                            <div className="absolute inset-0 bg-purple-500 blur-md opacity-40 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>
                        </div>
                        <div className='flex flex-col'>
                            {/* Adjusted text size slightly to fit the new height */}
                            <span className='text-white font-extrabold text-xl tracking-tight'>
                                Super<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Market</span>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <div className='flex items-center font-medium text-slate-300 space-x-10'>
                    <NavLink 
                        to='/'
                        className={({ isActive }) => 
                            `relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-cyan-400
                            ${isActive ? 'text-cyan-400 font-bold shadow-cyan-500/50' : ''}`
                        }
                    >
                        Home
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </NavLink>

                    <NavLink to='/cart'>
                        <div className='relative group'>
                            <FaCartShopping 
                                className='text-2xl transition-transform duration-300 group-hover:text-purple-400 group-hover:scale-110'
                            />
                            {
                                cart.length > 0 && (
                                    <span className='absolute -top-2 -right-3 bg-gradient-to-r from-pink-500 to-violet-600 text-[11px] w-5 h-5
                                     flex justify-center items-center animate-bounce rounded-full text-white font-bold shadow-lg shadow-purple-500/40 border-2 border-slate-900'>
                                        {cart.length}
                                    </span>
                                )
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar