import './category.css';
import Data from '../../data';


const Category = () => {

  const category = Data.category

  return (
    <div className='category-container'>
      <h2>دسته بندی محصولات</h2>
      <div className="category">
      {
        category.map(obj =>{
          return(    
            <div className="category_item">
              <img src={obj.image} alt="دسته بندی" />
              <p>{obj.title}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Category