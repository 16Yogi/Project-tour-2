import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
// import Nav2 from '../Component/Nav/Nav2'
import Footer from '../Component/Footer/Footer'
import Downloadapk from '../Component/Downloadapp/Downloadapk'
import News from '../Component/News/News'
import Tourstatistics from '../Component/Toursstatistics/Tourstatistics'
import About1 from '../Component/Aboutmod/About1'

export default function About() {
  return (
    <>
       <Nav/>
       <Banner2 banner2nameTitle="About Us"/>
       {/* <Nav2 nav2NameTitle="About us"/> */}
       <About1/>
       <Tourstatistics/>
       <News/>
       <Downloadapk/>
       <Footer/>
    </>
  )
}
