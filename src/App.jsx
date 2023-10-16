import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/molecules/Navbar'
import Home from './components/pages/Home'
import Footer from './components/molecules/Footer'
import { useLocation } from "react-router-dom";
import NavbarTwo from './components/molecules/NavbarTwo'
import Product from './components/pages/Product'
import Data from './components/pages/Data'
import { useEffect } from 'react'
import Programming from './components/pages/Programming'
import Cloud from './components/pages/Cloud'
import Tuition from './components/pages/Tuition'
import Partnership from './components/pages/Partnership'
import Faq from './components/pages/Faq'
import Why from './components/pages/Why'
import Verify from './components/pages/Verify'
import EmergingTech from './components/pages/EmergingTech'


function App() {
  const location = useLocation();
        let navbar = <NavbarTwo />;   // default navbar
        

        if (location.pathname.includes('/partnership') || location.pathname === "/")  {
          navbar = <Navbar />;
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
      <Route path='school/data' element= {<Data/>}/>
      <Route path='school/programming' element= {<Programming/>}/>
      <Route path='school/cloud' element= {<Cloud/>}/>
      <Route path='school/emerging_technologies' element= {<EmergingTech/>}/>
      <Route path='tuition' element= {<Tuition/>}/>
      <Route path='faq' element= {<Faq/>}/>
      <Route path='why_pluralcode' element= {<Why/>}/>
      <Route path='partnership' element= {<Partnership/>}/>
      <Route path='verify_certificate' element= {<Verify/>}/>
      <Route path='*' element= {<p className='h-[20vh] p-4 lg:px-14 w-full text-4xl flex items-center '>Page not found!!!</p>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
