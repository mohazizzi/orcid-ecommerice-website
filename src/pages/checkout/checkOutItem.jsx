import './checkout.css';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const CheckOutItem = ({ obj, cartItem, englishNumberToFarsi, addToCart, decreaseQty }) => {
  return (
    <div className={`check-out_item ${cartItem.length > 1 && 'item-border'}`}>
      <div className="check-out_item_img">
        <img src={obj.image} alt="تصویر محصول" />
      </div>
      <p className='check-out_item_name'>{obj.name}</p>
      <p className='check-out_item_price'>{englishNumberToFarsi(`${obj.price * obj.qty}`)} تومان</p>
      <div className='check-out_item_control'>
        <button className='check-out_item_control_btn' onClick={() => addToCart(obj)}>
          <FaPlus/>
        </button>
        <p className='check-out_item_control_qty'>
          {englishNumberToFarsi(`${obj.qty}`)} 
          <FaTimes/>
        </p>
        <button className='check-out_item_control_btn' onClick={() => decreaseQty(obj)}>
          <FaMinus/>
        </button>
      </div>
    </div>
  )
}

export default CheckOutItem