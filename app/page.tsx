import React from 'react'
import Home from './components/Home'
import Navbar from './components/navbar/NavBar'
import SubNav from './components/subnav/SubNav'


const page = () => {
  return (
    <div> 
      <Navbar/>
      <SubNav/>
      <Home/>
    </div>
  )
}

export default page