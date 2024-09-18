import React from 'react'
import Header from '../Components/Header'
import Spacilities from '../Components/Specilities'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

function Home() {
  return (
    <div>
      <Header />
      <Spacilities />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home