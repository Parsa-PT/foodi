'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { CatagoriesMap } from '@/constants'

const Catagories = () => {
  return (
    <section className=' relative flex mb-[8rem]  flex-col gap-10 lg:px-[4rem] lg:py-[6rem] justify-center items-center w-full px-5 py-7 '>
        <h1 className='text-red-500 text-[15px] font-bold tracking-[0.25rem]  uppercase'>Customer Favorites</h1>
        <h1 className=' text-[35px] font-semibold'>Popular Catagories</h1>
        

        <div className=' flex  justify-center gap-16'>
        {CatagoriesMap.map((item)=>(
                <div  className=' flex flex-col  items-center justify-center  gap-3 w-[213px] h-[213px] 2xl:w-[326px] 2xl:h-[326px] dropShadow bg-white rounded-[40px]  '>
                <div className=' w-[100px] h-[100px] 2xl:w-[153px] 2xl:h-[153px] rounded-full bg-[#C1F1C6] flex justify-center items-center'>   
                <Image src={item.pic} className=' ' width={1222} height={1222} alt='burgur'/>
                </div>
                <h1 className=' 2xl:text-[30px]'>{item.title}</h1>
                <p>{item.dishes}</p>
            </div>
        ))}
        </div>
            
    </section>
  )
}

export default Catagories
