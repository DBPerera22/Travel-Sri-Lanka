import React from 'react'
import './app.css'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
const app = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
    </>
  )
}

export default app