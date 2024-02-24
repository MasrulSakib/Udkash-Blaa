import React from 'react';
import logo11 from '../../assets/img_8-removebg-preview.png'
import logo12 from '../../assets/img_9-removebg-preview.png'
import logo13 from '../../assets/img_10-removebg-preview.png'

const Products = () => {
    return (
        <section className='mt-[600px] container mx-auto my-20'>
            <h3 className='text-5xl font-semibold'>The current numbers</h3>

            <div>
                <div className='bg-blue-600 rounded-2xl p-10 flex justify-evenly m-20'>
                    <p><span className='text-2xl'>86% </span>win-rate this month</p>
                    <p>|</p>
                    <p><span className='text-2xl'>86% </span>win-rate this month</p>
                    <p>|</p>
                    <p><span className='text-2xl'>86% </span>win-rate this month</p>
                </div>

                <div>
                    <div>
                        <h1 className='text-5xl font-semibold'>Optimize your investment game. <br />Use AI predictions for betting.</h1>
                        <div className='flex my-10 justify-center gap-x-10'>
                            <div className='h-[361px] w-[349px] border-2 rounded-2xl flex flex-col justify-start text-left p-5'>
                                <img className=' h-[100px] w-[110px] ' src={logo11} alt="" />
                                <p className='text-lg font-semibold'>Deverse Portfolio</p>
                                <p className='text-sm'>Build a diverse portfolio with BetterReturn, offering a range of strategic sports opportunities tailored to your investment preferences.</p>
                            </div>
                            <div className='h-[361px] w-[349px] border-2 rounded-2xl flex flex-col justify-start text-left p-5'>
                                <img className=' h-[100px] w-[100px] ' src={logo12} alt="" />
                                <p className='text-lg font-semibold'>Risk Mitigation Tools</p>
                                <p className='text-sm'>BetterReturn provides robust risk mitigation tools, ensuring a balanced approach to your sports investments. Manage risks wisely for sustained success.</p>
                            </div>
                            <div className='h-[361px] w-[349px] border-2 rounded-2xl flex flex-col justify-start text-left p-5'>
                                <img className=' h-[100px] w-[100px] ' src={logo13} alt="" />
                                <p className='text-lg font-semibold'>High win-rate</p>
                                <p className='text-sm'>Benefit from our superior algorithms and enjoy a consistently high win-rate. Elevate your sports investing game with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;