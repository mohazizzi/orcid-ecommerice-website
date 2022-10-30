import './single-product.css';
import { useParams } from 'react-router-dom';
import SingleProductItem from './SingleProductItem';
  

const SingleProduct = ({ productItems, englishNumberToFarsi, addToCart }) => {
  const { id } = useParams()
  return (
    <div className='container'>
      {
        productItems.map(obj =>{
          if(obj.id == id){
            return <SingleProductItem key={obj.id} obj={obj} englishNumberToFarsi={englishNumberToFarsi} addToCart={addToCart}/>
          }
        })
      }
    </div>
  )
}

export default SingleProduct