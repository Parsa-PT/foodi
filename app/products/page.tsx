import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialDishes2 } from '@/constants'
import MenuBar from '@/components/MenuBar'
import Burger from './burgers/burgerSec'
import PizzaSec from './pizza/PizzaSec'
import SandwichSec from './sandwich/SandwichSec'
import SaladSec from './salad/SaladSec'
import DessertSec from './dessert/DessertSec'
import DrinkSec from './drink/DrinkSec'

const Products = () => {
  return (
    <div>
     <MenuBar style='burger'/>
      <Burger/>
      <PizzaSec/>
      <SandwichSec/>
      <SaladSec/>
      <DessertSec/>
      <DrinkSec/>
    </div>
  )
}

export default Products
