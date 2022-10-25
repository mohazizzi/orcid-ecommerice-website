import './navbar.css';
import LargNav from './LargNav';
import MobileNav from './MobileNav';
import { useState, useEffect } from 'react';

const Navbar = () => {
  
  const [isMobile, setIsMobile] = useState(true)
  const [windowWidth, setWindowWidth]   = useState(window.innerWidth);
  
  const updateWidth = () => {
    setWindowWidth(window.innerWidth);

    if(windowWidth <= 930){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  }
  useEffect(() => (window.onresize = updateWidth), []);
  

  return (
    isMobile ? <MobileNav/> : <LargNav/>
  )
}

export default Navbar