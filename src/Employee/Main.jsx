import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home';
import Update from './Update';
import Create from './Create';
import Read from './Read';





const Main = () => {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default Main
