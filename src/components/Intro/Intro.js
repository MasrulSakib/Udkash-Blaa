import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import topImg from '../../assets/image-1.PNG';
import midImg from '../../assets/Image_2-removebg-preview.png';
import sideImg from '../../assets/Image 3.PNG';
import logo2 from '../../assets/Ball_logo-removebg-preview.png'

const Intro = () => {
    return (
        <section className='container mx-auto mb-16'>
            <div className='flex items-center justify-center'>
                <div className='container mx-auto bg-blue-600 h-[675px] flex flex-col justify-start pt-20 rounded-b-2xl text-white text-5xl font-bold'>

                    <div>
                        <h2 className=' overline decoration-2 decoration-gray-400'>Sport betting.</h2>
                        <h2>But as a investment.</h2>
                        <p className='text-base mt-3 font-normal'>Invest strategically in sports with BetterReturn and <br />
                            unlock the potential for long-term returns.</p>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <button className='bg-white py-2 px-4 rounded-full text-base font-semibold text-blue-600'>7 day free trial</button>
                        <button className='flex items-center text-base font-medium ml-4 text-white'>
                            <FaRegPlayCircle className="mr-2 h-[40px] w-auto" />
                            Watch Demo
                        </button>
                    </div>

                </div>
                <div className='flex flex-col items-center h-[735px] w-[1217px] absolute top-[528px] bg-white/[.30] rounded-2xl mb-10'>
                    <input className='bg-white w-[994px] h-[46px] mt-10 rounded-lg' placeholder='www.br.com/users'></input>

                    <div className='flex-1'>
                        <div className='bg-white w-[1160px] h-[605px] mt-5 flex-1 flex-col items-start justify-center rounded-2xl'>
                            <img className='mt-3 rounded-xl' src={topImg} alt="topImg" />
                            <div className='flex'>
                                <div className='flex-1 flex-col ms-3'>
                                    <img className='h-[94px] w-[501px]' src={midImg} alt="" />
                                    <div className='flex justify- items-start'>
                                        <div>
                                            <h2 className='text-left ms-3'>Recent</h2>
                                            <div className='flex flex-col justify-start items-start'>
                                                <p className='flex items-center text-left'><img src={logo2} alt="" />Match 1 <br />Today 16.00</p>
                                            </div>
                                            <div className='flex flex-col justify-start items-start'>
                                                <p className='flex items-center text-left'><img src={logo2} alt="" />Match 2 <br />23 June, 13.00</p>
                                            </div>
                                            <div className='flex flex-col justify-start items-start'>
                                                <p className='flex items-center text-left'><img src={logo2} alt="" />Match 3 <br />21 June, 19.45</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start items-center'>
                                            <h2 className='text-left ms-14'>Prediction</h2>
                                            <div className='text-center'>
                                                <p className='leading-[4rem]'>x2</p>
                                                <p className='leading-[4rem]'>1</p>
                                                <p className='leading-[4rem]'>2</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start'>
                                            <h2 className='text-left ms-14'>Odds</h2>
                                            <div className='ms-14'>
                                                <p className='leading-[4rem]'>1.5</p>
                                                <p className='leading-[4rem]'>1.86</p>
                                                <p className='leading-[4rem]'>1.89</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <img className=' h-[412px] w-[534px] rounded-r-2xl' src={sideImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;