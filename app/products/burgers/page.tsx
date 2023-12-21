import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialDishes2 } from '@/constants'
import MenuBar from '@/components/MenuBar'

const Burger = () => {

    

  return (
    <div>
      <MenuBar style='burger'/>
      <ProductMaker data={SpecialDishes2}/>
    </div>
  )
}

export default Burger
