import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialSandwich } from '@/constants'

const SandwichSec = () => {
  return (
    <div id='sandwich'>
      <div >
     
   
     <ProductMaker data={SpecialSandwich} title='Sandwich'/>

   </div>
    </div>
  )
}

export default SandwichSec
