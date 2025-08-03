import React from 'react'
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
import NewAddition from '@/components/newAddition/NewAddition'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <NewAddition/>
      <Footer />
    </div>
  )
}

export default Home