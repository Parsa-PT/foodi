'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='flex-test'>
            <div className=' flex flex-col lg:items-start  gap-10'>
                <h1 className='text-[35px] lg:text-[40px] xl:text-[52px] 2xl:text-[62px] font-extrabold'>
                Dive into Delights Of Delectable <span className='  text-btnColor'>Food</span>
                </h1>
                <p className=' text-[15px] lg:text-[20px]'>
                Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </p>

                <div className=' flex justify-center items-center gap-5'>
                    <Button title='Order now' style='btnShadow' />
                    <h1 className=' xl:text-[26px]'>Watch video</h1>
                    <div className=' flex justify-center items-center bg-white rounded-full w-[44px] h-[44px] lg:w-[80px] lg:h-[80px] dropShadow '>
                            <Image src='/icons/play.svg' alt='play' width={20} height={20}/>
                    </div>

                </div> 
                
            </div>

            <div>
                <div className=' relative w-[326px] h-[316px] lg:w-[462px] lg:h-[452px] xl:w-[562px] xl:h-[552px] 2xl:h-[662px] 2xl:w-[652px] rounded-full bg-btnColor'>
                    <Image src='/intersect.png' alt='woman' width={1100} height={1100} className=' absolute -bottom-1 right-[0.77rem]'/>
                    <div className=' relative'>
                    <Image src='/coment.png' className=' absolute w-[148px] lg:w-[248px] -left-10' width={1100} height={1100} alt='coment' />
                    <p className='text-[10px] text-red-500 lg:text-base absolute -bottom-[2rem] -left-5 lg:-left-0 lg:-bottom-[3.3rem]'>Hot spicy Food 🌶</p>
                    </div>
                </div>


                <div className=' -mt-10 flex flex-col gap-3 lg:flex-row'>
                    <div className=' flex flex-row gap-7  py-4 px-3 dropShadow  overflow-hidden rounded-xl bg-white'>
                        <Image src='/homeF1.png' alt='' className=' rounded-xl' width={100} height={100}/>
                        <div className=' flex  flex-col   justify-center gap-2'>
                            <h1 className=''>Spicy noodles</h1>
                            <div className=' flex gap-1'>
                            {Array(3).fill(1).map((_, index)=>(
                                <Image key={index} src='/icons/starfull.svg' alt='star' width={20} height={20}/>
                            ))}
                            {Array(2).fill(1).map((_, index)=>(
                                <Image key={index} src='/icons/star.svg' alt='star' width={20} height={20}/>
                            ))}
                            </div>
                            
                            <p><span className=' text-red-400'>$</span>18.00</p>
                        </div>
                    </div>
                        

                    <div className=' flex flex-row gap-7  py-4 px-3 dropShadow  overflow-hidden rounded-xl bg-white'>
                        <Image src='/homeF2.png' alt='' className=' rounded-xl' width={100} height={100}/>
                        <div className=' flex  flex-col   justify-center gap-2'>
                            <h1 className=''>Vegetarian salad</h1>
                            <div className=' flex gap-1'>
                            {Array(4).fill(1).map((_, index)=>(
                                <Image key={index} src='/icons/starfull.svg' alt='star' width={20} height={20}/>
                            ))}
                            {Array(1).fill(1).map((_, index)=>(
                                <Image key={index} src='/icons/star.svg' alt='star' width={20} height={20}/>
                            ))}
                            </div>
                            
                            <p><span className=' text-red-400'>$</span>34.00</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Hero
