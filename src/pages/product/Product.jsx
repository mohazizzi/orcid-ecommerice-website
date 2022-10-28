import './product.css';
import Data from "../../data"
import ProductItem from './ProductItem';
import { useState } from 'react';

const Product = () => {

    let englishNumberToFarsi = (number)=> parseInt(number).toLocaleString('ar-EG')

    const ProductItems = Data.productItems
    const [formData, setFormData] = useState(
        {
            isAvailable: false,
            firstPrice: '0',
            secondPrice: '100000000',
        }
    )

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })    
    }  

    return (
    <div className="container">
        <div className="prudoct">
            <div className="product_filter">
                <form action="#">
                    <label htmlFor="available" className='product_filter_available-lable'>
                        فقط کالاهای موجود
                        <span className={`custome-checkbox ${formData.isAvailable && 'available-checked'}`}></span>
                    </label>
                    <input
                        type="checkbox"
                        id='available'
                        checked={formData.isAvailable}
                        className='product_filter_available-input' 
                        onChange={handleChange}
                        name='isAvailable'
                    />
                    <h4>محدوده قیمت</h4>
                    <label htmlFor="first-price" className='product_filter_price_label'>
                        کمترین قیمت
                        <span className='price_value'>{englishNumberToFarsi(formData.firstPrice)} تومان</span>
                    </label>
                    <input 
                        type="range" 
                        id="first-price"  
                        min="0" 
                        max="100000000" 
                        step='100000'
                        className='product_filter_price_input'
                        name='firstPrice'
                        value={formData.firstPrice}
                        onChange={handleChange}
                    />
                    <label htmlFor="second-price" className='product_filter_price_label'>
                        بیشترین قیمت
                        <span className='price_value'>{englishNumberToFarsi(formData.secondPrice)} تومان</span>
                    </label>
                    <input 
                        type="range" 
                        id="second-price"  
                        min="0" 
                        max="100000000" 
                        step='100000'
                        className='product_filter_price_input'
                        name='secondPrice'
                        value={formData.secondPrice}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="product_container">   
                {
                    ProductItems.map((obj, index) =>{
                        if(formData.isAvailable && formData.firstPrice <= obj.price && formData.secondPrice >= obj.price){
                            return obj.available && <ProductItem obj={obj} index={index} key={obj.id} englishNumberToFarsi={englishNumberToFarsi}/>
                        }else if(formData.firstPrice <= obj.price && formData.secondPrice >= obj.price){ 
                            return <ProductItem obj={obj} index={index} key={obj.id} englishNumberToFarsi={englishNumberToFarsi}/>
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Product