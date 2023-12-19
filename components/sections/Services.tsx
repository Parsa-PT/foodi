'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { ServicesItem } from '@/constants'

const Services = () => {
  return (
    <section className=' relative flex mb-[8rem]  flex-col gap-10 lg:px-[4rem] lg:py-[6rem] max-w-[1382px] justify-center items-center w-full px-5 py-7 '>
            <div className=' flex flex-col lg:flex-row gap-8 lg:gap-[4rem]'>

                <div className=' flex flex-col gap-7 lg:max-w-[452px] xl:max-w-[552px] justify-center'>
                            <div className='  flex flex-col items-center mb-2 lg:items-start'>
                                <h1 className='text-red-500 text-[15px] font-bold tracking-[0.25rem]  uppercase '>Our Story & Services</h1>
                                <h1 className=' text-[35px] xl:text-[50px] font-semibold'>Our Culinary Journey And Services</h1>
                            </div>
                                <p className=' xl:text-[16px]'>
                                Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                                </p>
                                
                                <Button title='Explore' />
                </div>


                <div className=' grid grid-cols-2 xl:gap-y-11 gap-y-6 gap-x-[3rem]   xl:gap-x-[6rem] justify-self-center  self-center'>
                    {ServicesItem.map((item)=>(
                        <div key={item.id} className=' w-[152px] h-[164px] flex flex-col justify-center items-center  px-4 gap-2 lg:w-[177px] xl:w-[277px] xl:h-[297px]  rounded-[30px] lg:h-[197px] bg-white dropShadow'>
                            <Image src={item.pic} className=' w-[41px] lg:w-[54px] xl:w-[64px]' alt='logo' width={500} height={500}/>
                            <h1 className=' text-[15px] lg:text-[14px] xl:text-[24px]  font-bold text-btnColor'>{item.title}</h1>
                            <p className=' text-[10px] lg:text-[10px] xl:text-[20px] text-[#90BD95] text-center font-semibold'>{item.desc}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
    </section>
  )
}

export default Services
