import { RiSearchLine, RiShoppingCartLine, RiPercentLine } from 'react-icons/ri';
import { HiOutlineLogin, HiOutlineTicket } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';
import { useState } from 'react';


const LargNav = () => {
    const [showCategory, setShowCategory] = useState(true)

    function handleClick(){
        setShowCategory(prevShow => !prevShow)
    }

  return (
    <nav className="navbar">
        <div className='d_flex space_between'>
            <div className='d_flex'>
                <a href="#" className="navbar_logo">orcid</a>
                <form action="#" className='navbar_search'>
                    <button>
                        <RiSearchLine/>
                    </button>
                    <input type="text" placeholder='جستجو'/>
                </form>
            </div>
            <div className='d_flex'>
                <a href="#" className='navbar_login-cta'>
                    <HiOutlineLogin fontSize="1.3rem"/>
                    <span>
                        ورود | ثبت نام
                    </span>
                </a>
                <a href="#" className='navbar_shop-cta'>
                    <RiShoppingCartLine fontSize="1.3rem"/>
                </a>
            </div>
        </div>
        <ul className="navbar-nav">
            <li className="navbar_nav_items">
                <button className='navbar_nav_items_btn color-900' onClick={handleClick}>
                    <BiMenu fontSize='1.1rem'/>
                    <span>
                        دسته بندی کالاها
                    </span>
                </button>
            </li>
            <li className="navbar_nav_items">
                <a href="#" className='navbar_nav_items_links'>
                    <MdOutlineFastfood/>
                    <span>
                        سوپرمارکت
                    </span>
                </a>
            </li>
            <li className="navbar_nav_items">
                <a href="#" className='navbar_nav_items_links'>
                    <AiOutlineFire/>
                    <span>
                        پرفروش ترین ها
                    </span>
                </a>
            </li>
            <li className="navbar_nav_items">
                <a href="#" className='navbar_nav_items_links'>
                    <HiOutlineTicket/>
                    <span>
                        تخفیف ها و پیشنهادها
                    </span>
                </a>
            </li>
            <li className="navbar_nav_items">
                <a href="#" className='navbar_nav_items_links'>
                    <RiPercentLine/>
                    <span>
                        شگفت انگیزها
                    </span>
                </a>
            </li>
            <li className="navbar_nav_items">
                <a href="#" className='navbar_nav_items_links'>
                    <span>
                        سوالی دارید؟
                    </span>
                </a>
            </li>
        </ul>
        <ul className={`navbar_category ${showCategory ? 'category-show' : ''}`}>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    موبایل
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    کالای دیجیتال
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    مد و پوشاک
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    کالاهای سوپرمارکتی
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    زیبایی و سلامت
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    خانه و آشپزخانه
                </a>
            </li>
            <li className="navbar_category_items">
                <a href="#" className='navbar_category_items_links'>
                    ورزش و سفر
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default LargNav