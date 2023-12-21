import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialDishes2 } from '@/constants'

const SaladSec = () => {
  return (
    <div id='salad'>
        <div >
     
   
     <ProductMaker data={SpecialDishes2} title='Salad'/>

   </div>
    </div>
  )
}

export default SaladSec
