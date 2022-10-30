import { Link } from "react-router-dom"

const ProductItem = ({ obj, englishNumberToFarsi }) => {

  return (
    <Link to={`/product/${obj.id}`} className="product-item">
        { obj.discount && <div className="product-item_discount">{obj.discount}</div> }
        <div className="product-item_image">
            <img src={obj.image} alt="تصویر محصول" />
        </div>
        <h4 className="product-item_title">{obj.name}</h4>
        <p className={`product-item_available ${obj.available ? 'available' : 'not-available'}`}>{ obj.available ? 'کالا موجود است' : 'کالا موجود نیست'}</p>
        <p className="product-item_price">{ englishNumberToFarsi(`${obj.price}`) } تومان</p>
        { obj.prevPrice && <p className='product-item_prevprice'>{ englishNumberToFarsi(`${obj.prevPrice}`) } تومان</p>}
    </Link>
  )
}

export default ProductItem