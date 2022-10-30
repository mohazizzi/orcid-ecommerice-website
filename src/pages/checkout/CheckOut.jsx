import './checkout.css';
import CheckOutItem from './CheckOutItem';
import emptyBasket from '../../assets/img/sabad-kharid.png';


const CheckOut = ({ cartItem, addToCart, decreaseQty, englishNumberToFarsi }) => {
console.log(cartItem)
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <div className='container'>
      <div className="check-out">
        <div className="check-out_box">
          {
            cartItem.length == 0 && 
            <div className='check-out_box_empty'>
              <img src={emptyBasket} alt="سبد خالی" />
              <p>سبد خرید شما خالی است!</p>
            </div>
          }
          {
            cartItem.length > 0 && cartItem.map(obj =>{
              return <CheckOutItem key={obj.id} obj={obj} cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi} addToCart={addToCart} decreaseQty={decreaseQty}/>
            })
          }
        </div>
        <div className="check-out_info">
          <div className="check-out_info_price">
            <p>جمع کل</p>
            <span>{englishNumberToFarsi(`${totalPrice}`)} تومان</span>
          </div>
          <div className="check-out_info_text">برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد شوید.</div>
          <button className='check-out_info_btn'>ادامه</button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut