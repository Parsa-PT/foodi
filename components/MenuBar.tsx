import React from 'react'
import Image from 'next/image'
import { menuItems } from '@/constants'
import Link from 'next/link'

type MenuBarProp = {
    style : string
}

const MenuBar = ({style} : MenuBarProp) => {
  return (
    <div className=' flex flex-col items-center justify-center lg:pt-[4rem]'>
      <div className=' hide-scrollbar  w-full  overflow-x-auto gap-8 md:w-full pl-[70%] md:pl-0 flex justify-center  '>   
               {menuItems.map((item) =>(
                       <div key={item.id} className={` w-[87px]  h-[87px] transition-all ease-in duration-75  hover:bg-[#CDFBC2]   md:w-[178px] md:h-[170px] rounded-t-full `}>
                        <a className='flex flex-col items-center pt-4  gap-5' href={item.href}>
                        <Image src={item.pic} className=' w-[57px] h-[65px] ' alt='logo'  width={130} height={100}/>
                           <h1 className=' text-[25px]'>{item.title}</h1>
                        </a>
                        
                          
                        </div>
               ))}
       </div>
    </div>
  )
}

export default MenuBar
