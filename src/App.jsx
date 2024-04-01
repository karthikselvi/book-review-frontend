import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import ContactUs from './components/ContactUs'
import FavoriteBooks from './Home/FavoriteBooks'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
function App() {

  return (
    <>
    <NavBar/>
    <Outlet/>
        <Element name="contactus">
        </Element>

    </>
  )
}

export default App
