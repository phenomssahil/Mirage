import React, { useContext } from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDMarqueeDemo } from './components/Gallery'
const App = () => {
  const { showLogin } = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-slate-800 to-black'>
      <ToastContainer position='bottom-right' />
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
        <Route path='/gallery' element={<ThreeDMarqueeDemo />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App