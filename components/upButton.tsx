import React from 'react'
import Image from 'next/image'


const UpButton = () => {
  return (
    <div>
      <div className=' w-[3rem] h-[3rem] fixed flex left-4 z-50 justify-center items-center rounded-full bg-[#CCFFC4]'>
                <Image src='/icons/arrowup.svg' alt='arrow' width={30} height={30}/>
      </div>
    </div>
  )
}

export default UpButton
