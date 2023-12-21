import ProductMaker from '@/components/ProductMaker'
import React from 'react'
import { menuItems , SpecialDessert } from '@/constants'

const DessertSec = () => {
  return (
    <div id='dessert'>
      <ProductMaker data={SpecialDessert} title='Dessert'/>
    </div>
  )
}

export default DessertSec
