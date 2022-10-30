import { RiSearchLine, RiShoppingCartLine, RiPercentLine } from 'react-icons/ri';
import { HiOutlineLogin, HiOutlineTicket } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom"

const LargNav = ({ cartItem, englishNumberToFarsi }) => {
    const [showCategory, setShowCategory] = useState(true)
    
    function handleClick(){
        setShowCategory(prevShow => !prevShow)
    }

  return (
    <nav className="navbar">
        <div className='d_flex space_between'>
            <div className='d_flex'>
                <Link to='/' className="navbar_logo">orcid</Link>
                <form action="#" className='navbar_search'>
                    <button>
                        <RiSearchLine/>
                    </button>
                    <input type="text" placeholder='جستجو'/>
                </form>
            </div>
            <div className='d_flex'>
                <Link to='/' className='navbar_login-cta'>
                    <HiOutlineLogin fontSize="1.3rem"/>
                    <span>
                        ورود | ثبت نام
                    </span>
                </Link>
                <Link to='/checkout' className='navbar_shop-cta'>
                    <RiShoppingCartLine fontSize="1.3rem"/>
                    {cartItem.length > 0 && <span>{englishNumberToFarsi(`${cartItem.length}`)}</span>}
                </Link>
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
                <Link to='/product' className='navbar_nav_items_links'>
                    <MdOutlineFastfood/>
                    <span>
                        سوپرمارکت
                    </span>
                </Link>
            </li>
            <li className="navbar_nav_items">
                <Link to='/product' className='navbar_nav_items_links'>
                    <AiOutlineFire/>
                    <span>
                        پرفروش ترین ها
                    </span>
                </Link>
            </li>
            <li className="navbar_nav_items">
                <Link to='/product' className='navbar_nav_items_links'>
                    <HiOutlineTicket/>
                    <span>
                        تخفیف ها و پیشنهادها
                    </span>
                </Link>
            </li>
            <li className="navbar_nav_items">
                <Link to='/product' className='navbar_nav_items_links'>
                    <RiPercentLine/>
                    <span>
                        شگفت انگیزها
                    </span>
                </Link>
            </li>
            <li className="navbar_nav_items">
                <Link to='/product' className='navbar_nav_items_links'>
                    <span>
                        سوالی دارید؟
                    </span>
                </Link>
            </li>
        </ul>
        <ul className={`navbar_category ${showCategory ? 'category-show' : ''}`}>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    موبایل
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    کالای دیجیتال
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    مد و پوشاک
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    کالاهای سوپرمارکتی
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    زیبایی و سلامت
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    خانه و آشپزخانه
                </Link>
            </li>
            <li className="navbar_category_items">
                <Link to='/product' className='navbar_category_items_links'>
                    ورزش و سفر
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default LargNav