'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'


const Login = () => {

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  

  return (
    <section className=' relative flex flex-col gap-10 px-[3rem] py-[6rem] lg:flex-row lg:px-[4rem] lg:py-[6rem] max-w-[1482px] justify-center items-center w-full '>
        <div className=' w-full flex-col-reverse   flex lg:flex-row-reverse justify-between  bg-[#18262F] dropShadow'>
        <div className="bgcover lg:w-[140%]"/>
         <div className="lg:hidden">
         <Image src='/pizza.jpg' alt='pizza' width={1111} height={1111}/>
        </div> 


            <div className=' max-w-[470px] py-7 flex flex-col gap-16  px-7'>
               <div>
                  <h1 className=' text-[30px] lg:text-[40px] font-semibold mb-2 text-white'>Login</h1>
                  <p className=' text-[15px] lg:text-[20px] text-white'>Login into your account </p>
               </div>

              <form className=' flex flex-col gap-12'>
                 <div>
                  <label className=' text-white' htmlFor="username">Username</label>
                  <input onChange={(e)=> setUsername(e.target.value)}  value={username} className=' w-full lg:w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>
                 <div>
                 <label className=' text-white' htmlFor="password">Password</label>
                 <input onChange={(e)=> setPassword(e.target.value)}  value={password}  className=' w-full h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 </div>
                
                <div  onClick={()=> {
                localStorage.setItem('username', username)
              }}>
                    <Button  title='Submit' style=' w-[100px] h-[40px] text-base md:text-xl md:w-[179px] md:h-[60px] '/>
                </div>
                
              </form>

              <p className=' text-white'>If you dont have account an <Link className=" text-btnColor" href='/register/signup'>
            SignUp
         </Link> </p>
            </div>
        </div>
    </section>
  )
}

export default Login
