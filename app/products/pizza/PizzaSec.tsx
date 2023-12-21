import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialPizza} from '@/constants'
import MenuBar from '@/components/MenuBar'

const PizzaSec = () => {
  return (
    <div id='pizza'>
      <div >
     
   
      <ProductMaker data={SpecialPizza} title='Pizza'/>

    </div>
    </div>
  )
}

export default PizzaSec
