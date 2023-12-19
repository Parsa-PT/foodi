'use client'
import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { SpecialDishes } from '@/constants'



const Carousel = ({children : slides} : any) => {

    const [curr , setCurr] = useState(0)

    const prev = ()=> setCurr(curr => curr === 0 ? slides.length - 1 : curr -1)
    const next = ()=> setCurr(curr => curr === 0 ? slides.length - 1 : curr +1)


  return (
    <div>
     
    </div>
  )
}

export default Carousel
