import ProfileMenubar from '@/components/profileMenubar'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const AllProducts = () => {
  return (
    <div className=' relative flex flex-col gap-10 px-[3rem] py-[6rem] lg:flex-row lg:px-[4rem] lg:py-[6rem] max-w-[1482px] justify-center items-center lg:items-start  w-full '>
        <ProfileMenubar/>
        <div className=' w-[358px] sm:w-[400px] relative h-[500px] overflow-hidden  md:p-3 pt-10  flex flex-col  lg:flex-row-reverse md:justify-between lg:w-[700px] lg:h-[500px] bg-white shadow-lg'>
        <div className=' flex flex-col items-center gap-5 w-full'>
                <div className=' text-[15px] flex w-full pl-1 lg:pl-1 gap-4  lg:gap-[2.5rem]'>
                    <p>id</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Vote</p>
                    <p>Image</p>
                  </div>

                <div className=' flex flex-col gap-4 whitespace-nowrap  w-full h-[50rem] pb-[40rem] lg:pb-0 overflow-auto '>
                  {Array(40).fill(1).map(()=>(
                    <div className=' text-[10px]  lg:text-[15px] flex items-center w-full gap-5 bg-[#D9D9D9] p-3'>
                    <p>1.</p>
                    <p>SuperBurger</p>
                      <p>22.00</p>
                      <p>4.6</p>
                      <div>
                        <Image src='/burgerpic.png' className=' w-[3.5rem]' alt='food' width={1111} height={1111}/>
                      </div>
                     
                      <button className=' w-[43px] h-[20px] lg:w-[70px] lg:h-[25px] bg-red-500 text-[10px] rounded-[30px]  text-white'>
                        remove
                    </button>
                   
                      
                    </div>
                  ))}
                
                </div>
                  

            </div> 
        </div>
        
    </div>
  )
}

export default AllProducts
