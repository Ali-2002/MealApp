import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Default = (props: any) => {
  return (
    <>
        <div className='container'>
            <Navbar/>
            <div className='main-content'>
                <Outlet  {...props}/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Default