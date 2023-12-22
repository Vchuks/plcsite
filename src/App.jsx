import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from "react";
import Navbar from './components/molecules/Navbar'
const Home = lazy(()=> import('./components/pages/Home')) 
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
import CreativeMotion from './components/sub-pages/CreativeMotion';
import Art from './components/sub-pages/Art';
import Content from './components/sub-pages/Content';
import Excel from './components/sub-pages/Excel';
import { DataProvider } from './contextData/DigitalContent';
import NavbarDigital from './components/molecules/NavbarDigital';
const DigitalEconomy = lazy(()=> import('./components/pages/DigitalEconomy'))
const Business = lazy(()=> import('./components/pages/Business'))
import ReactGA from 'react-ga4'


function App() {
  ReactGA.initialize("G-86XXG6VF1L");

  const location = useLocation();
        let navbar = <NavbarTwo />;   // default navbar
        

        if (location.pathname.includes('/partnership') || location.pathname === "/")  {
          navbar = <Navbar />;
        } if(location.pathname.includes('/school/digital_economy')){
          navbar = <NavbarDigital/>
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
      <DataProvider>
    <Routes>
      <Route path='/' element = {<Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>}/>
      <Route path='school/product' element= {<Product/>}/>
      <Route path='school/data' element= {<Data/>}/>
      <Route path='school/programming' element= {<Programming/>}/>
      <Route path='school/cloud' element= {<Cloud/>}/>
      <Route path='school/emerging_technologies' element= {<EmergingTech/>}/>
      <Route path='school/digital_economy' element= {<Suspense fallback={<p>Loading...</p>}>
        <DigitalEconomy />
      </Suspense>}/>
      <Route path='school/digital_economy/creative_design' element= {<Suspense fallback={<p>Loading...</p>}>
        <CreativeMotion />
      </Suspense>}/>
      <Route path='school/digital_economy/art_of_selling' element= {<Suspense fallback={<p>Loading...</p>}>
        <Art />
      </Suspense>}/>
      <Route path='school/digital_economy/content_creation' element= {<Suspense fallback={<p>Loading...</p>}>
        <Content />
      </Suspense>}/>
      <Route path='school/digital_economy/advanced_excel' element= {<Suspense fallback={<p>Loading...</p>}>
        <Excel />
      </Suspense>}/>
      <Route path='school/business' element= {<Suspense fallback={<p>Loading...</p>}>
        <Business />
      </Suspense>}/>
      <Route path='tuition' element= {<Tuition/>}/>
      <Route path='faq' element= {<Faq/>}/>
      <Route path='why_pluralcode' element= {<Why/>}/>
      <Route path='partnership' element= {<Partnership/>}/>
      <Route path='verify_certificate' element= {<Verify/>}/>
      <Route path='*' element= {<p className='h-[20vh] p-4 lg:px-14 w-full text-4xl flex items-center '>Page not found!!!</p>}/>

    </Routes>
    </DataProvider>
    <Footer/>
    </>
  )
}

export default App
