'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { SpecialDishes } from '@/constants'
import { useState } from 'react';


const Special = () => {
 


  return (
    <section className=' relative flex mb-[8rem]   flex-col gap-10 lg:px-[4rem] lg:py-[6rem] justify-center items-center w-full px-5 py-7 '>
        <div className='  flex flex-col items-center'>
        <h1 className='text-red-500 text-[15px] font-bold tracking-[0.25rem]  uppercase'>Special Dishes</h1>
        <h1 className=' text-[35px] font-semibold'>Standout Dishes From Our Menu</h1>
        </div>
        <div>
        <div className=' flex flex-col  lg:flex-row  gap-12    '>

                {SpecialDishes.map((item)=>(
                        <div className=' relative w-[292px]  2xl:w-[446px] 2xl:h-[523px] px-4 2xl:px-[2rem] pt-4 2xl:pt-7 h-[343px]  flex flex-col items-center gap-7 2xl:gap-10 dropShadow bg-white rounded-[40px] '>
                        <Image src={item.pic} className=' 2xl:w-[276px] w-[10rem]' width={1212} height={1212} alt='food'/>
                        <div className=' flex flex-col gap-3 items-start w-full '>
                        <h1 className=' text-xl 2xl:text-[30px] font-bold'>{item.title}</h1>
                        <p className='2xl:text-[22px]'>{item.desc}</p>
                        </div>
                        <div className=' flex  justify-between w-full'>
                            <p className=' 2xl:text-[24px]'><span className='text-red-500 '>$</span>{item.price}</p>
                            <div className=' flex  gap-2'>
                             
                            <Image  src='/icons/starfull.svg' alt='star' width={20} height={20}/>
                            <p className=' 2xl:text-[24px]'>{item.vote}</p>   
                            </div>
                        </div>
    
    
                        <div className=' w-[57px] h-[49px] bg-btnColor absolute flex justify-center items-center right-0 top-0  rounded-tr-[37px] rounded-bl-[42px]'>
                                <Image src='/icons/vector.svg' alt='vector' width={20} height={20}/>
                        </div>
                    </div>
                ))}


                
            </div>

        </div>
            
    </section>
  )
}

export default Special
