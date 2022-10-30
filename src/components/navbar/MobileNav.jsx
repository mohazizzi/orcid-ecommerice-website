import { RiSearchLine, RiShoppingCartLine, RiPercentLine } from 'react-icons/ri';
import { HiOutlineLogin, HiOutlineTicket } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineFire, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom"

const MobileNav = ({ cartItem, englishNumberToFarsi }) => {
    
    const [menuDisplay, setMenuDisplay] = useState(false)

    function handleClick(){
        setMenuDisplay(prevShow => !prevShow)
    }

  return (
    <nav className="navbar">
        <div className=''>
            <div className='d_flex space_between'>
                <button className='mobile-navbar_open' onClick={handleClick}>
                    <AiOutlineMenu/>
                </button>
                <div className={`mobile-navbar ${menuDisplay ? 'show-menu' : 'hide-menu'}`}>
                    <button className='mobile-navbar_close' onClick={handleClick}>
                        <AiOutlineClose/>
                    </button>
                    <ul className="mobile-navbar_nav">
                        <li className="mobile-navbar_nav_items">
                            <Link to="/product" className='mobile-navbar_nav_items_links'>
                                <MdOutlineFastfood/>
                                <span>
                                    سوپرمارکت
                                </span>
                            </Link>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <Link to="/product" className='mobile-navbar_nav_items_links'>
                                <AiOutlineFire/>
                                <span>
                                    پرفروش ترین ها
                                </span>
                            </Link>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <Link to="/product" className='mobile-navbar_nav_items_links'>
                                <HiOutlineTicket/>
                                <span>
                                    تخفیف ها و پیشنهادها
                                </span>
                            </Link>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <Link to="/product" className='mobile-navbar_nav_items_links'>
                                <RiPercentLine/>
                                <span>
                                    شگفت انگیزها
                                </span>
                            </Link>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <Link to="/product" className='mobile-navbar_nav_items_links'>
                                <span>
                                    سوالی دارید؟
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <ul className='mobile-navbar_category'>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                موبایل
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                کالای دیجیتال
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                مد و پوشاک
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                کالاهای سوپرمارکتی
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                زیبایی و سلامت
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                خانه و آشپزخانه
                            </Link>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <Link to="/product" className='mobile-navbar_category_items_links'>
                                ورزش و سفر
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="navbar_logo">orcid</Link>
            </div>
            <div className='d_flex space_between bottom-nav'>
                <form action="#" className='navbar_search mobile-nav_search'>
                    <button>
                        <RiSearchLine/>
                    </button>
                    <input type="text" placeholder='جستجو'/>
                </form>
                <div className='d_flex'>
                    <Link to='/login' className='navbar_login-cta mobile_login-cta'>
                        <HiOutlineLogin fontSize="1.3rem"/>
                        <span>
                            ورود
                        </span>
                    </Link>
                    <Link to='/checkout' className='navbar_shop-cta mobile_shop-cta'>
                        <RiShoppingCartLine fontSize="1.3rem"/>
                        {cartItem.length > 0 && <span>{englishNumberToFarsi(`${cartItem.length}`)}</span>}
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav