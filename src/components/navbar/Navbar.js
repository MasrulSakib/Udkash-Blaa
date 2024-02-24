import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../../assets/logo-5-removebg-preview.png"

const Navbar = () => {
    return (
        <nav className='container mx-auto'>
            <div className="bg-blue-600 h-[100px] flex items-center justify-between px-8 rounded-t-2xl mt-10">
                <img src={Logo} alt="" />
                <div className='flex justify-center items-center gap-x-4 font-semibold text-lg cursor-pointer'>
                    <Link className='text-gray-300 hover:text-white' to='home'>Home</Link>
                    <Link className='text-gray-300 hover:text-white' to='product'>Product</Link>
                    <Link className='text-gray-300 hover:text-white' to='pricing'>Pricing</Link>
                    <Link className='text-gray-300 hover:text-white' to='roi'>ROI</Link>
                </div>
                <div className='flex gap-x-6'>
                    <button className='bg-white py-3 px-6 rounded-2xl text-xl font-semibold'>Sign In</button>
                    <button className='bg-cyan-300 py-3 px-6 rounded-2xl text-xl font-semibold'>Sign up</button>
                </div>
            </div>
        </nav >
    );
};
export default Navbar;