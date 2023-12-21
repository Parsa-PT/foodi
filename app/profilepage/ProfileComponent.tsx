'use client'
import React from 'react'
import Image from 'next/image'
import { userProfile , adminProfile } from '@/constants'

const ProfileComponent = () => {

  const userinfo = window.localStorage.getItem('username')

  return (
    <div className=' relative flex flex-col gap-10 px-[3rem] py-[6rem] lg:flex-row lg:px-[4rem] lg:py-[6rem] max-w-[1482px] justify-center items-center w-full '>
      <div className=' flex flex-col lg:flex-row  gap-12 justify-center items-center lg:items-start '>
        <div className=' flex lg:flex-col'>

            {userinfo === 'admin' ? (
              <div className=' w-[500px] lg:w-full overflow-hidden lg:overflow-visible flex-row lg:flex-col flex'>
                   {adminProfile.map((item)=>(
                  <div  key={item.id} className='  md:w-[141px] w-[89px] h-[89px] md:h-[141px] hover:scale-110 transition-all ease-in duration-100  hover:shadow-xl hover:bg-white flex justify-center items-center bg-btnColor'>
                    <Image src={item.pic}  className=' md:w-[43px] w-[25px] ' alt='info ' width={1111} height={1111}/>
                </div>
                ))}
              </div>
            ) : (
              <>

            {userProfile.map((item)=>(
                        <div  key={item.id} className=' md:w-[141px] w-[89px] h-[89px] md:h-[141px] hover:scale-110 transition-all ease-in duration-100  hover:shadow-xl hover:bg-white flex justify-center items-center bg-btnColor'>
                          <Image src={item.pic}  className=' md:w-[43px] w-[25px] ' alt='info ' width={1111} height={1111}/>
                      </div>
                      ))}
              </>
            )}   

          
          
          

        </div>
        
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
