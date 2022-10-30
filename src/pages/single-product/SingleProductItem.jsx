import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductItem = ({ obj, addToCart }) => {


  const englishNumberToFarsi = (number)=> parseInt(number).toLocaleString('ar-EG');

  const showAlart = ()=>{
    addToCart(obj)
    toast.success('محصول با موفقیت افزوده شد', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="single-product">
        <div className="single-product_image">
            <img src={`.${obj.image}`} alt="تصویر محصول" />
            { obj.discount && <div className="single-product_discount">{obj.discount}</div> }
        </div>
        <div className="single-product_info">
            <h2 className='single-product_info_name'>{obj.name}</h2>
            <p className='single-product_info_description'>{obj.description}</p>
            <p className={`single-product_info_available ${obj.available ? 'available' : 'not-available'}`}>{ obj.available ? 'کالا موجود است' : 'کالا موجود نیست'}</p>
            <p className='single-product_info_price'>{englishNumberToFarsi(`${obj.price}`)} تومان</p>
            { obj.prevPrice && <p className='single-product_info_prev-price'>{ englishNumberToFarsi(`${obj.prevPrice}`) } تومان</p>}
            <button className={`single-product_info_btn ${!obj.available && 'out-of-service'}`} onClick={()=> obj.available && showAlart()}>
                افزودن به سبد خرید
              </button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}

export default SingleProductItem