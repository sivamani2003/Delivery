import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <div className='app'> 
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
