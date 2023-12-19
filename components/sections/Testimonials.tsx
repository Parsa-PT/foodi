'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { People } from '@/constants'

const Testimonials = () => {
  return (
    <section className=' relative flex mb-[8rem]   flex-col gap-10 lg:px-[4rem] lg:py-[6rem] max-w-[1382px] justify-center items-center w-full px-5 py-7 '>
        
            <div className=' flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-[7rem] '>
                <div className=' flex flex-col gap-7 max-w-[652px] justify-center'>
                        <div className='  flex flex-col items-center mb-2 lg:items-start'>
                            <h1 className='text-red-500 text-[15px] font-bold tracking-[0.25rem]  uppercase '>Testimonials</h1>
                            <h1 className=' text-[35px] xl:text-[50px] font-semibold'>What Our Customers Say About Us</h1>
                        </div>
                            <p>
                            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
                            </p>

                            <div className=' flex justify-between lg:justify-start lg:gap-4 items-center'>
                                <div className=' flex space-x-[-25px] lg:space-x-[-30px]'>
                                    {People.map((item)=>(
                                        <div key={item.id} className=' bg-[#FFE8AD] w-[60px] lg:w-[80px] overflow-hidden   rounded-full border-8 border-white'>
                                            <Image src={item.pic} className='' alt='woman' width={1280} height={20}/> 
                                    </div>
                                    ))}
                                </div>

                                <div className=' flex flex-col gap-2'>
                                    <h1 className=' font-semibold'>Customer Feedback</h1>
                                    <div className=' flex'>
                                        <Image src='/icons/starfull.svg' className=' w-[20px]' alt='woman' width={1280} height={20}/> 
                                        <p className=' mr-5'>4.9</p>
                                        <p className=' text-gray-400'>(18.6k Reviews)</p>
                                    </div>
                                </div>
                            </div>

                            
                </div>
                <div className=' mt-[15rem]  2xl:mt-[25rem]'>
                    <div  className=' w-[282px] h-[207px] lg:w-[392px] lg:h-[362px] xl:w-[492px] xl:h-[362px] relative bg-btnColor rounded-t-[140px] rounded-b-[20px]'>
                            <Image src='/woman2.png' className=' absolute bottom-0   w-[260px] xl:w-[500px] lg:w-[500px]' alt='woman' width={1111} height={1111}/>
                            <p  className=' absolute top-1/3 -right-2 rotate-45 text-3xl lg:-right-10 lg:text-5xl'>🍕</p>
                            <p className=' absolute top-1/2 -left-2 lg:-left-10 -rotate-45 text-3xl lg:text-5xl'>😋</p>
                            <div className=' relative '>
                                     <Image src='/coment.png' className=' absolute w-[148px] rotate-180  lg:w-[248px] -bottom-[13rem] -right-12 lg:-bottom-[23rem]' width={1100} height={1100} alt='coment' />
                                     <p className='text-[10px]  lg:text-base absolute -bottom-[11.9rem] -right-6   lg:-bottom-[21.3rem] '>Our Best Chef 😁</p>
                           </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Testimonials
