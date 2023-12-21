import React from 'react'
import Image from 'next/image'
import { cartItems } from '@/constants'
import Button from '@/components/Button'

const CartComponent = () => {
  return (
    <div className=' relative flex flex-col gap-10 px-[3rem] py-[6rem] lg:flex-row lg:px-[4rem] lg:py-[6rem] max-w-[1482px] justify-center items-center w-full '>
        <div className=' flex flex-col lg:flex-row justify-center items-center gap-20'>
            <div className=' flex flex-col gap-10'>

                {cartItems.map((cartItem) =>(
                    <div key={cartItem.id} className=' w-[293px] sm:w-[400px] sm:h-[70px] lg:w-[588px] lg:h-[100px] 2xl:h-[173px] 2xl:w-[888px] relative flex flex-row justify-between px-6 2xl:px-32 lg:px-14 sm:px-8 items-center  h-[50px] bg-white cartShadow'>
                    <Image src={cartItem.pic} className=' absolute w-[66px] sm:w-[80px] 2xl:w-[163px] 2xl:h-[163px] sm:h-[80px] lg:w-[100px] lg:h-[100px] h-[66px] -left-[3rem] -top-1' alt='pic' width={1111} height={1111}/>
                    <h1 className=' font-semibold text-[11px] 2xl:text-[30px] sm:text-[15px] lg:text-[20px]'>Fattoush salad</h1>
                    <p className=' text-[10px] sm:text-[15px] 2xl:text-[30px] lg:text-[20px]'>{cartItem.price}</p>
                    <button className=' w-[43px] h-[20px] lg:w-[70px] lg:h-[25px] bg-red-500 text-[10px] rounded-[30px]  text-white'>
                        remove
                    </button>
                    <p className='sm:text-[16px] 2xl:text-[30px]  lg:text-[22px] text-[14px]'>{cartItem.qty}</p>
                </div>
                ))} 
                
                
            </div>

            <div>
                <div className=' w-[236px] h-[270px] flex flex-col  lg:w-[300px] lg:h-[300px]  px-4  py-7 gap-6 bg-white dropShadow rounded-[40px]'>
                        <span className=' border-l-4 border-green-400 pl-3'>price : $81.00</span>
                        <span className=' border-l-4 border-green-400 pl-3'>Delivery : $81.00</span>
                        <span className=' border-l-4 border-green-400 pl-3 mb-5'>Total price : $81.00</span>
                        <div className=' w-full flex justify-center'>
                        <Button title='Pay' style='btnShadow'/>

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartComponent
