'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { navLink } from '@/constants'
import StaggeredDropDown from './DropMenu'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {

    const [nav , setNav] = useState(false)


  return (
    <div>
    <nav className=' flex  justify-center py-3 px-6 '>
        <div className=' w-full lg:max-w-[1080px] xl:max-w-[1420px] flex justify-between items-center '>
        <div className=' cursor-pointer' onClick={()=> {window.location.assign('/')}}>

                <Image src='/icons/logo.svg' width={100} height={50} alt='logo'/>
            
        </div>
        <div className='hidden lg:block'>
            <ul className=' flex gap-10 items-center'>
                {navLink.map((item)=>(
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
                <li>
                    <StaggeredDropDown/>
                </li>
            </ul>
        </div>
        <div className=' hidden  lg:flex gap-4'>
            <Image src='/icons/search.svg' width={30} height={30} alt='search'/>
            <Image src='/icons/cart.svg' width={30} height={30} alt='search'/>
            <Link href='/register/login'>
                 <Button title='Login' />
            </Link>
        </div>
        </div>

        <div onClick={()=> setNav(!nav)} className=' lg:hidden cursor-pointer '>
        <Image src='/icons/menu.svg' width={30} height={30} alt='menu'/>
        </div>

     
       
    </nav>


    <AnimatePresence>

{nav && (
         <motion.div animate={{height:400}} exit={{height:0}} initial={{height:0}} transition={{duration:1}}   className=' cursor-pointer flex flex-col justify-center gap-6 items-center w-full  lg:hidden'>
                {navLink.map((item)=>(
                    <>
                    <motion.div animate={{opacity:100 }} exit={{opacity:0}} initial={{opacity:0}} transition={{duration:0.3}}>
                    <Link  className=' text-2xl flex transition-all ease-in duration-75 hover:text-green-200 bold-20 text-black flexCenter cursor-pointer pb-1.5 lg:transition-all hover:font-bold' key={item.id} href={item.href}>
                            {item.title}
                        </Link>

                       
                    </motion.div>
                        
                    </>
                ))}
                <motion.div animate={{opacity:100 }} exit={{opacity:0}} initial={{opacity:0}} transition={{duration:0.3}}>
                    <Button title='Login' />
                </motion.div>
                 
         </motion.div>
)}



</AnimatePresence>
    </div>
   


  )
}

export default Navbar
