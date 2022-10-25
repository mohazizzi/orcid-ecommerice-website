import { RiSearchLine, RiShoppingCartLine, RiPercentLine } from 'react-icons/ri';
import { HiOutlineLogin, HiOutlineTicket } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineFire, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const MobileNav = () => {
    
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
                            <a href="#" className='mobile-navbar_nav_items_links'>
                                <MdOutlineFastfood/>
                                <span>
                                    سوپرمارکت
                                </span>
                            </a>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <a href="#" className='mobile-navbar_nav_items_links'>
                                <AiOutlineFire/>
                                <span>
                                    پرفروش ترین ها
                                </span>
                            </a>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <a href="#" className='mobile-navbar_nav_items_links'>
                                <HiOutlineTicket/>
                                <span>
                                    تخفیف ها و پیشنهادها
                                </span>
                            </a>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <a href="#" className='mobile-navbar_nav_items_links'>
                                <RiPercentLine/>
                                <span>
                                    شگفت انگیزها
                                </span>
                            </a>
                        </li>
                        <li className="mobile-navbar_nav_items">
                            <a href="#" className='mobile-navbar_nav_items_links'>
                                <span>
                                    سوالی دارید؟
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className='mobile-navbar_category'>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                موبایل
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                کالای دیجیتال
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                مد و پوشاک
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                کالاهای سوپرمارکتی
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                زیبایی و سلامت
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                خانه و آشپزخانه
                            </a>
                        </li>
                        <li className="mobile-navbar_category_items">
                            <a href="#" className='mobile-navbar_category_items_links'>
                                ورزش و سفر
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="navbar_logo">orcid</a>
            </div>
            <div className='d_flex space_between bottom-nav'>
                <form action="#" className='navbar_search mobile-nav_search'>
                    <button>
                        <RiSearchLine/>
                    </button>
                    <input type="text" placeholder='جستجو'/>
                </form>
                <div className='d_flex'>
                    <a href="#" className='navbar_login-cta mobile_login-cta'>
                        <HiOutlineLogin fontSize="1.3rem"/>
                        <span>
                            ورود
                        </span>
                    </a>
                    <a href="#" className='navbar_shop-cta mobile_shop-cta'>
                        <RiShoppingCartLine fontSize="1.3rem"/>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav