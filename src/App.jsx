import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/molecules/Navbar'
import Home from './components/pages/Home'
import Footer from './components/molecules/Footer'
import { useLocation } from "react-router-dom";
import NavbarTwo from './components/molecules/NavbarTwo'
import Product from './components/pages/Product'
import { useEffect } from 'react'


function App() {
  const location = useLocation();
        let navbar = <Navbar />;   // default navbar
        if (location.pathname.includes('/school')) {
          navbar = <NavbarTwo />;
        }

   useEffect(()=> {
         if (location.hash) {
           let elem = document.getElementById(location.hash.slice(1))
           if(elem) {
             elem.scrollIntoView({behavior: "smooth"})
                    }          
             } else {
       window.scrollTo({top:0,left:0, behavior: "smooth"})
                     }
         }, [location,])
  return (
    <>
      {navbar}
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='school/product' element= {<Product/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
