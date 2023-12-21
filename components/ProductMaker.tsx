import React from 'react'
import Image from 'next/image'




const ProductMaker = ({data , title} : any) => {



  return (
    <div className=' relative flex flex-col gap-10 px-[3rem] py-[4rem]   lg:py-[7rem]  justify-center items-center w-full '>
        
        <div className='  flex flex-col items-center'>
        <h1 className='text-red-500 text-[15px] font-bold tracking-[0.25rem]  uppercase'>{title}</h1>
        </div>

                
            <div className='w-full   flex justify-center '>
            <div className='  w-full gap-x-[7rem] py-[5rem]  px-[2rem] sm:px-0   flex  hide-scrollbar overflow-x-auto sm:overflow-visible  sm:grid   sm:grid-cols-2 2xl:grid-cols-5  lg:grid-cols-3   xl:grid-cols-4  justify-self-center  self-center     sm:gap-[4rem] '>
              {data.map((item : any) =>(
                    <div className=' relative w-[292px]  whitespace-nowrap   px-[1.5rem]  sm:px-4 2xl:px-[2rem] pt-4 2xl:pt-7 h-[343px]  flex flex-col items-center gap-7  dropShadow bg-white rounded-[40px] '>
                    <Image src={item.pic} className='  w-[10rem]' width={1212} height={1212} alt='food'/>
                    <div className=' flex flex-col gap-3 items-start w-full '>
                    <h1 className='  sm:text-xl  font-bold'>{item.title}</h1>
                    <p className=''>{item.desc}</p>
                    </div>
                    <div className=' flex  justify-between w-full'>
                        <p className=' '><span className='text-red-500 '>$</span>{item.price}</p>
                        <div className=' flex  gap-2'>
                         
                        <Image  src='/icons/starfull.svg' alt='star' width={20} height={20}/>
                        <p className=' '>{item.vote}</p>   
                        </div>
                    </div>


                    <div className=' w-[57px] h-[49px] bg-btnColor absolute flex justify-center items-center right-0 top-0  rounded-tr-[37px] rounded-bl-[42px]'>
                            <Image src='/icons/vector.svg' alt='vector' width={20} height={20}/>
                    </div>
                </div>
              ))}
                        
          
                </div>
            </div>
                
    </div>
  )
}

export default ProductMaker
