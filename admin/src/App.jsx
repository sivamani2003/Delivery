import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Sidebar from './componets/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar>
       
      </Navbar>
      <hr />
      <div className="app-content">
        <Sidebar/>
          <Routes>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/order' element={<Orders/>}></Route>
          </Routes>

      </div>
    </div>
  )
}

export default App
