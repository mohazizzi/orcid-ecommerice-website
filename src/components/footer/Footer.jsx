import './footer.css';
import appleStore from '../../assets/img/apple-store.png';
import bazar from '../../assets/img/bazar.png';
import googlePlay from '../../assets/img/google-play.png';
import myKet from '../../assets/img/myket.png';

import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div className="d_flex space_between">
            <a href="#" className="footer_logo">اورکید</a>
            <a href="#" className="footer_go-top">بازگشت به بالا</a>
        </div>
        <div className="footer_contact">
            <p>تلفن پشتیبانی ۶۱۹۳۲۲۰۰ - ۰۲۱</p>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="footer_app d_flex space_between">
            <p>دانلود اپیکیشن اورکید</p>
            <div className='footer_app_group'>
                <a href="#" className="footer_app_group_link">
                    <img src={appleStore} alt="اپ استور" />
                </a>
                <a href="#" className="footer_app_group_link">
                    <img src={bazar} alt="بازار" />
                </a>
                <a href="#" className="footer_app_group_link">
                    <img src={googlePlay} alt="گوگل پلی" />
                </a>
                <a href="#" className="footer_app_group_link">
                    <img src={myKet} alt="مایکت" />
                </a>
            </div>
        </div>
        <div className="footer_end d_flex space_between">
            <div className='footer_end_group'>
                <h3>خدمات مشتریان</h3>
                <a href="#">پرسشهای متداول</a>
                <a href="#">رویه های بازگرداندن کالا</a>
                <a href="#">شرایط استفاده</a>
                <a href="#">حریم خصوصی</a>
                <a href="#">گزارش باگ</a>
            </div>
            <div className='footer_end_group'>
                <h3>راهنمای خرید</h3>
                <a href="#">نحوه ثبت سفارش</a>
                <a href="#">رویه ی ارسال سفارش</a>
                <a href="#">شیوه های پرداخت</a>
            </div>
            <div className='footer_end_group'>
                <h3>همراه ما باشید!</h3>
                <div className='footer_end_social-links'>
                    <a href="#">
                        <AiOutlineInstagram className='footer_end_social-links_icon'/>
                    </a>
                    <a href="#">
                        <AiOutlineTwitter className='footer_end_social-links_icon'/>
                    </a>
                    <a href="#">
                        <AiFillLinkedin className='footer_end_social-links_icon'/>
                    </a>
                    <a href="#">
                        <AiOutlineWhatsApp className='footer_end_social-links_icon'/>
                    </a>
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