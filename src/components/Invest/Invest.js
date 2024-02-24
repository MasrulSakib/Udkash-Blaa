import React from 'react';
import phone from '../../assets/Phone1-removebg-preview.png'

const Invest = () => {
    return (
        <section className='flex items-center justify-center'>
            <div className=' bg-blue-600 w-[1360px] h-[619px] rounded-3xl my-10 flex items-center justify-around'>
                <div className='h-[189px] w-[595px] px-10 text-left text-white'>
                    <p className='text-4xl py-2'>Don't bet. Invest.</p>
                    <p className='text-base py-2'>Discover a platform that focuses on strategic sports investing, maximizing your potential for long-term gains.</p>
                    <button className='rounded-full px-4 py-2 my-3 bg-white font-medium text-black'>Learn More</button>
                </div>
                <div>
                    <img className=' relative top-[83px] ' src={phone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Invest;