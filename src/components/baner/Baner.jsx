import './baner.css';
import Data from '../../data';

const Baner = ({ firstBanerIndex, secondBanerIndex}) => {
  
  const banerItems = Data.banerItem
  
  return (
    <div className='baner'>
      {
        banerItems.map((obj, index) =>{
          if(firstBanerIndex === index || secondBanerIndex === index){
            return(
              <div className="baner_item">
                <img src={obj.image} alt="بنر تبلیغات" />
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Baner