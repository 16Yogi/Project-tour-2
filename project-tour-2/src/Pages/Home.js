import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner from '../Component/Banner/Banner'
import Location from '../Component/Location/Location'
import Bestoffer from '../Component/Bestoffer/Bestoffer'
import Tourstatistics from '../Component/Toursstatistics/Tourstatistics'
import Contact from '../Component/Contact/Contact'
import Customer from '../Component/Customer/Customer'
import News from '../Component/News/News'
import Downloadapk from '../Component/Downloadapp/Downloadapk'
import Footer from '../Component/Footer/Footer'

export default function Home() {
  return (
    <>
      <Nav/>
      <Banner/>
      <Location/>
      <Bestoffer/>
      <Tourstatistics/>
      <Contact/>
      <Customer/>
      <News/>
      <Downloadapk/>
      <Footer/>
    </>
    )
}
