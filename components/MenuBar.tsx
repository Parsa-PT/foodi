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
                       <div key={item.id} className={` w-[87px] h-[87px]    md:w-[178px] md:h-[170px] rounded-t-full ${style === 'burger' ? 'bg-[#CDFBC2]' : 'bg-gray-300' && style === 'pizza' ? 'bg-[#CDFBC2]' : 'bg-gray-300'}`}>
                        <Link className=' flex flex-col items-center pt-5 gap-7' href={item.href}>
                        <Image src={item.pic} className=' w-[57px] h-[65px] ' alt='logo'  width={130} height={100}/>
                           <h1 className=' text-[25px]'>{item.title}</h1>
                        </Link>
                          
                        </div>
               ))}
       </div>
    </div>
  )
}

export default MenuBar
