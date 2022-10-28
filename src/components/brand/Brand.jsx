import './brand.css';
import Data from '../../data';

const Brand = () => {

  const brandItems = Data.brandItems

  return (
    <div className='brand_container'>
      <h2>محبوب ترین برندها</h2>
      <div className="brand">
        {
          brandItems.map(obj =>{
            return(
              <div className="brand-item">
                <img src={obj.image} alt="برند" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Brand