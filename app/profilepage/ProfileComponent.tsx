'use client'
import React from 'react'
import Image from 'next/image'
import { userProfile , adminProfile } from '@/constants'
import ProfileMenubar from '@/components/profileMenubar'

const ProfileComponent = () => {


  return (
    <div className=' relative flex flex-col gap-10 px-[3rem] py-[6rem] lg:flex-row lg:px-[4rem] lg:py-[6rem] max-w-[1482px] justify-center items-center w-full '>
      <div className=' flex flex-col lg:flex-row  gap-12 justify-center items-center lg:items-start '>
        
          <ProfileMenubar/>
        <div>
        <h1 className=' text-[40px] font-bold'>Profile</h1>
        <div className=' w-[358px] relative h-[700px]  md:p-10 pt-10  flex flex-col  lg:flex-row-reverse md:justify-between lg:w-[700px] lg:h-[400px] bg-white shadow-lg'>
            
            <div className=' w-full justify-center items-center mb-10 lg:mb-0 flex'>
               <Image src='/people1.jpg'  className=' w-[180px] h-[180px] rounded-full' alt='woman' width={1111} height={1111}/>
            </div>
            <div>
              <form className=' flex flex-col gap-5 px-4 mg:px-0'>
              <div className=' flex flex-col'>
                  <label className=' text-black' htmlFor="username">Username</label>
                  <input className=' w-full lg:w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>
              <div className=' flex flex-col'>
                  <label className=' text-black' htmlFor="username">Email</label>
                  <input className=' w-full lg:w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>
              <div className=' flex flex-col'>
                  <label className=' text-black' htmlFor="username">Phone</label>
                  <input className=' w-full lg:w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>
              <div className=' flex flex-col'>
                  <label className=' text-black' htmlFor="username">Address</label>
                  <input className=' w-full lg:w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>

              <div className=' flex justify-center'>
                 <button className=' absolute bottom-0 lg:right-0 text-[20px] text-white w-[121px] h-[51px] bg-[#2DEE0F]'>
                  Save
                 </button>
              </div>
                
                
              </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent
