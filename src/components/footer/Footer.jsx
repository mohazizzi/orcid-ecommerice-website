import './footer.css';
import appleStore from '../../assets/img/apple-store.png';
import bazar from '../../assets/img/bazar.png';
import googlePlay from '../../assets/img/google-play.png';
import myKet from '../../assets/img/myket.png';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="d_flex space_between">
            <Link to='/' className="footer_logo">اورکید</Link>
            <button className="footer_go-top" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                بازگشت به بالا
            </button>
        </div>
        <div className="footer_contact">
            <p>تلفن پشتیبانی ۶۱۹۳۲۲۰۰ - ۰۲۱</p>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="footer_app d_flex space_between">
            <p>دانلود اپیکیشن اورکید</p>
            <div className='footer_app_group'>
                <Link to='/' className="footer_app_group_link">
                    <img src={appleStore} alt="اپ استور" />
                </Link>
                <Link to='/' className="footer_app_group_link">
                    <img src={bazar} alt="بازار" />
                </Link>
                <Link to='/' className="footer_app_group_link">
                    <img src={googlePlay} alt="گوگل پلی" />
                </Link>
                <Link to='/' className="footer_app_group_link">
                    <img src={myKet} alt="مایکت" />
                </Link>
            </div>
        </div>
        <div className="footer_end d_flex space_between">
            <div className='footer_end_group'>
                <h3>خدمات مشتریان</h3>
                <Link to='/'>پرسشهای متداول</Link>
                <Link to='/'>رویه های بازگرداندن کالا</Link>
                <Link to='/'>شرایط استفاده</Link>
                <Link to='/'>حریم خصوصی</Link>
                <Link to='/'>گزارش باگ</Link>
            </div>
            <div className='footer_end_group'>
                <h3>راهنمای خرید</h3>
                <Link to='/'>نحوه ثبت سفارش</Link>
                <Link to='/'>رویه ی ارسال سفارش</Link>
                <Link to='/'>شیوه های پرداخت</Link>
            </div>
            <div className='footer_end_group'>
                <h3>همراه ما باشید!</h3>
                <div className='footer_end_social-links'>
                    <Link to='/'>
                        <AiOutlineInstagram className='footer_end_social-links_icon'/>
                    </Link>
                    <Link to='/'>
                        <AiOutlineTwitter className='footer_end_social-links_icon'/>
                    </Link>
                    <Link to='/'>
                        <AiFillLinkedin className='footer_end_social-links_icon'/>
                    </Link>
                    <Link to='/'>
                        <AiOutlineWhatsApp className='footer_end_social-links_icon'/>
                    </Link>
                </div>
                <h3>با ثبت ایمیل از جدیدترین تخفیفها باخبر شوید</h3>
                <form action="#">
                    <input type="text" placeholder='ایمیل شما'/>
                    <button>ثبت</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer