'use client'
import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <section className=' relative flex flex-col gap-10 lg:flex-row lg:py-[6rem] max-w-[1482px] justify-center items-center w-full '>
        <div className=' w-full flex-col  flex lg:flex-row-reverse justify-between items-center bg-white dropShadow'>

            <div className=' w-[140%]'>
                <Image src='/pizza.jpg' alt='pizza' width={1111} height={1111}/>
            </div>


            <div className=' max-w-[470px] px-7'>
               <h1>Login</h1>
              <p>Login into your account </p>

              <form>
                 <label htmlFor="username">Username</label>
                 <input className=' w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
                 <label htmlFor="password">Password</label>
                 <input className=' w-[20rem] h-9 text-black outline-none pl-1 bg-[#CCFFC4]' type="text" name="username" id="username" />
              </form>
            </div>
        </div>
    </section>
  )
}

export default Login
