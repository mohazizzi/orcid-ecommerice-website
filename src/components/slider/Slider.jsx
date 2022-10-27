import './slider.css';
import Data from '../../data.js';
import { useState, useEffect } from 'react';
import BtnSlider from './BtnSlider';

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  const sliderData = Data.slider;
  
  const nextSlide = () => {
    if(slideIndex !== sliderData.length){
      setSlideIndex(prevSlide => prevSlide + 1)
    } 
    else if (slideIndex === sliderData.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(prevSlide => prevSlide - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(sliderData.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  useEffect(
    () => {
      const id = setInterval(nextSlide, 8000);
      return () => clearInterval(id);
    },
    [slideIndex]
  );

  return (
      <div className="container-slider">
          {sliderData.map((obj, index) => {
              return (
                  <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                  >
                      <img 
                        src={obj.image} 
                        alt='عکس اسلایدر'
                      />
                  </div>
              )
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

          <div className="container-dots">
              {Array.from({length: 5}).map((item, index) => (
                  <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                  ></div>
              ))}
          </div>
      </div>
  )
}

export default Slider