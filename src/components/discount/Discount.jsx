import './discount.css';
import Data from '../../data';

const Discount = () => {

    const discountBaner = Data.discountBaner;
console.log(discountBaner)

  return (
    <div className='discount'>
        {
            discountBaner.map(obj =>{
                console.log(obj.image)
                return(
                <div className="discount_item">
                    <img src={obj.image} alt='بنر تخفیف' />
                </div>
                )
            })
        }
    </div>
  )
}

export default Discount