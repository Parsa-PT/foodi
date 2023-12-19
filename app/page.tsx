import Catagories from '@/components/sections/Catagories'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Special from '@/components/sections/Special'
import Testimonials from '@/components/sections/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" overflow-hidden flex flex-col items-center">
        <Hero/>
        <Catagories/>
        <Special/>
        <Testimonials/>
        <Services/>
    </main>
  )
}
