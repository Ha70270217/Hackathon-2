import React from 'react'

import BlueHeader from '@/app/components/blue-header'
import Navbar from '@/app/components/Navbar2'
import Carousel from '@/app/components/caraousel'
import GreenDiv from '@/app/components/green-div'
import Whitediv from '@/app/components/white-dic'
import Lastdiv from '@/app/components/last-div'
import Editors from '@/app/components/editorspick'
import ProductCard from '@/app/components/products-card'
import Footer from '@/app/components/Footer'


const page = () => {
  return (
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carousel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer/>
     
    </div>
  )
}

export default page
