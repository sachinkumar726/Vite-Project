import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar  from './components/NavbarPage/Navbar'
import Login from './components/AuthPage/Login'
import Footer  from './components/Footer/Footer';
import Register from './components/AuthPage/Register';
import ForgetPass from './components/AuthPage/ForgetPass';

const ScrollToTop = () =>{
  const {pathname} = useLocation();

  useEffect(() =>{
    window.scrollTo(0,0);

  }, [pathname]);

  console.log(pathname);
  return null;
}

function App() {

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forget' element={<ForgetPass/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
