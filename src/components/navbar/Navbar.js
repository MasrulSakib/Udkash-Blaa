import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../../assets/logo-5-removebg-preview.png"

const Navbar = () => {
    return (
        <nav className='bg-blue-600 h-[100px] flex items-center justify-around'>
            <img src={Logo} alt="" />
            <div className='flex justify-center items-center gap-x-4 text-lg text-white'>
                <Link to='home'>Home</Link>
                <Link to='product'>Product</Link>
                <Link to='pricing'>Pricing</Link>
                <Link to='roi'>ROI</Link>
            </div>
            <div className='flex gap-x-6'>
                <button className='bg-white py-3 px-6 rounded-2xl text-xl font-semibold'>Sign In</button>
                <button className='bg-cyan-300 py-3 px-6 rounded-2xl text-xl font-semibold'>Sign up</button>
            </div>
        </nav>
    );
};
export default Navbar;