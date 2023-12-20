import React from 'react'
import Image from 'next/image'


type ButtonProp ={
    title:string,
    style?:string,
    svg?:boolean
}

const Button = ({title , style , svg} : ButtonProp) => {
  return (
    <div>
      <button className={` bg-btnColor w-[100px] h-[40px] text-base md:text-xl md:w-[179px] md:h-[60px] flex justify-center   items-center gap-4 text-white  rounded-[40px] ${style}`}>
        {svg && (
            <Image src='/icons/phone.svg'   width={25} height={20} alt='phone'/>
        )}
            {title}
      </button>
    </div>
  )
}

export default Button
