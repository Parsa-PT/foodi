import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'


const Footer = () => {
  return (
    <footer className=' relative flex lg:justify-center   gap-10 lg:px-[4rem] max-h-[432px] lg:py-[6rem]  w-full px-5 py-2 '>
      <div className=' max-w-[1394px] flex flex-col justify-between  w-full'>
        <div className=' flex flex-col lg:flex-row mb-3 justify-between w-full lg:mb-[2rem]  '>


          <div className=' max-w-[302px] lg:mr-[10rem]'> 
              <Image src='/icons/logo.svg' className=' mb-2' width={100} height={50} alt='logo'/>
            <p className=' lg:text-[24px] mb-4'>
            Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>
        

    
          <div className=' flex w-full justify-between gap-3 lg:gap-[6rem] '>
          <ul>
                <h1 className=' text-[15px] lg:text-[26px] font-semibold'>Usefull links</h1>
                {footerLinks.useFull.map((item)=>(
                  <li className=' text-[13px] text-[#555555]  mb-3 lg:text-[20px]' key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul>
                <h1 className='text-[15px] lg:text-[26px] font-semibold'>Main Menu</h1>
                {footerLinks.mainMenu.map((item)=>(
                  <li className=' text-[13px] text-[#555555] mb-3 lg:text-[20px]' key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul>
                <h1 className='text-[15px] lg:text-[26px] font-semibold'>Contact Us</h1>
                {footerLinks.contactUs.map((item)=>(
                  <li className=' text-[13px] text-[#555555] mb-3 lg:text-[20px]' key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
          </div>
        
        </div>

        <div className=' flex flex-col sm:flex-row  gap-8 items-center'>
          <ul className=' flex gap-2'>
            {footerLinks.social.map((item)=>(
              <li key={item.id} className=' w-[38px] h-[38px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#e5f9e7] cursor-pointer flex justify-center items-center hover:bg-btnColor transition-all ease-in duration-100'>
                <Image src={item.pic} className=' w-[9px] lg:w-[14px]' alt='socila' width={30} height={30}/>
              </li>
            ))}
            
          </ul>
          <div>
            <p className=' text-[13px]'>Copyright 2023 <span className="  text-center text-transparent  bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">Rexcode</span> | All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
