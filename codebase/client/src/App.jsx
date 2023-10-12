import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

//pages
import Home from './markup/pages/Home';
import About from './markup/pages/About';
import Contact from './markup/pages/Contact';
import Login from './markup/pages/Login';
import Services from './markup/pages/Services';
import Fo4 from './markup/pages/404';
// admin page



//componnents
import Header from './markup/components/Header/Header';
import Footer from './markup/components/Footer/Footer';

function App() {


  return (
    <>
      <Routes>
        <Header />
        <Route path='/' element={ <><Home/></>} />
        <Route path='/about' element={<><About /></>} />
        <Route path='/contact' element={<><Contact/></>} />
        <Route path='/services' element={<><Services/></>} />
        <Route path='/login' element={<><Login /></>} />
        <Route path='/Fo4' element={ <><Fo4/></>} />
        <Footer />
      </Routes>
  
    </>
  )
}

export default App
