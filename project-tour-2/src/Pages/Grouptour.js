import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import Nav2 from '../Component/Nav/Nav2'
import Destinationplace from '../Component/Destination/Destinationplace'
import News from '../Component/News/News'
import Downloadapk from '../Component/Downloadapp/Downloadapk'
import Footer from '../Component/Footer/Footer'

export default function Grouptour() {
  return (
    <>
       <Nav/>
       <Banner2 banner2nameTitle="Group Tour Packges"/>
       <Nav2 nav2NameTitle="Group Tour"/>
       <Destinationplace/>
       <News/>
       <Downloadapk/>
       <Footer/>
    </>
  )
}
