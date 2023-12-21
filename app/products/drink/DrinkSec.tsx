import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialDrink } from '@/constants'

const DrinkSec = () => {
  return (
    <div id='drink'>
      <ProductMaker data={SpecialDrink} title='Drink'/>
    </div>
  )
}

export default DrinkSec
