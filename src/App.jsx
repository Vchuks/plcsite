import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/molecules/Navbar'
import Home from './components/pages/Home'
import Footer from './components/molecules/Footer'

function App() {

  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
