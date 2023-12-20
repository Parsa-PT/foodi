import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import Image from 'next/image'
import { menuItems } from '@/constants'

const Products = () => {
  return (
    <div className=' flex justify-center'>

        {/* <div className=' w-full  flex gap-10  bg-black '>
               
                    {menuItems.map((item) =>(
                            <div key={item.id} className=' w-[178px] h-[170px] flex flex-col items-center  pt-5 gap-5 rounded-t-full bg-[#CDFBC2]'>
                                <Image src={item.pic} className=' w-[57px] h-[65px] ' alt='logo'  width={130} height={100}/>
                                <h1 className=' text-[25px]'>{item.title}</h1>
                             </div>
                    ))}
                    
                
        </div> */}
      <ProductMaker/>
    </div>
  )
}

export default Products
