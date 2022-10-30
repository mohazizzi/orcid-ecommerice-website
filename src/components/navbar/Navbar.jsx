import './navbar.css';
import LargNav from './LargNav';
import MobileNav from './MobileNav';
import { useState, useEffect } from 'react';

const Navbar = ({ cartItem, englishNumberToFarsi }) => {
  
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
    isMobile ? <MobileNav cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi}/> : <LargNav cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi}/>
  )
}

export default Navbar