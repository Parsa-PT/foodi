import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialBurger } from '@/constants'
import MenuBar from '@/components/MenuBar'

const Burger = () => {

    

  return (
    <div id='burger' >
     
   
      <ProductMaker data={SpecialBurger} title='Burger'/>

    </div>
  )
}

export default Burger
