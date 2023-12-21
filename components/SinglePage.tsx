import React from 'react'
import Image from 'next/image'
import Button from './Button'

const SinglePage = () => {
  return (
    <div className=' relative flex flex-col lg:flex-row gap-10 px-[3rem] py-[4rem]   lg:py-[7rem]  justify-center items-center w-full '>
      <div className=' flex flex-col lg:flex-row  justify-center items-center gap-8'>
        <div className=' w-[332px] flex flex-col gap-2 items-center  bg-[#53EC62] rounded-t-[184px] dropShadow'>
                <Image src='/food1.png' className=' w-[299px] mt-[-3rem]' alt='food' width={1111} height={1111}/>
                <h1 className=' mb-4 text-[30px] font-semibold text-white'>Fattoush salad</h1>
                <div className=' flex w-full justify-around items-center'>
                    <span className=' flex gap-2 items-center text-white'>
                    <Image src='/icons/kilo.svg' className=' w-[19px]' alt='food' width={1111} height={1111}/>
                    <h1>300gr</h1>
                    </span>
                    <span className=' flex gap-2 items-center text-white'>
                    <Image src='/icons/starfull.svg' className=' w-[19px]' alt='food' width={1111} height={1111}/>
                    <h1>4.9</h1>
                    </span>
                </div>
                <p className=' text-[30px]'>
                    <span className=' text-red-400'>$</span>
                    33.00
                </p>
        </div>

    <div className=' max-w-[400px]'>
    <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam debitis sapiente amet rem a cumque, dicta aperiam libero minus quam atque dolore fugit eius rerum ipsam maiores quos blanditiis?
        </div>

        <div className=' flex  justify-between w-full'>
            <Button style='btnShadow' title='Add'/>
            <div className=' flex gap-3 items-center'>
            <span className=' w-[37px] h-[37px] flex justify-center items-center text-white text-[32px] rounded-lg bg-[#595959]'>-</span>
            <span className=' text-xl'>1</span>
            <span className=' w-[37px] h-[37px] flex justify-center items-center text-black text-[32px] rounded-lg bg-[#D9D9D9]'>+</span>
            </div>

        </div>
    </div>
        
      </div>
    </div>
  )
}

export default SinglePage
