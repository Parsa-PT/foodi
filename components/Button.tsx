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
      <button className={` bg-btnColor flex justify-center  text-xl items-center gap-4 text-white w-[179px] h-[60px] rounded-[40px] ${style}`}>
        {svg && (
            <Image src='/icons/phone.svg'   width={25} height={20} alt='phone'/>
        )}
            {title}
      </button>
    </div>
  )
}

export default Button
