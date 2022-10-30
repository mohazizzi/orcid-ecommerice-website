import './navbar.css';
import LargNav from './LargNav';
import MobileNav from './MobileNav';

const Navbar = ({ cartItem, englishNumberToFarsi }) => {

  return (
    <nav className='navbar'>
      {
        window.innerWidth <= 930 ? <MobileNav cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi}/> : <LargNav cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi}/>
      }
    </nav>
  )
}

export default Navbar