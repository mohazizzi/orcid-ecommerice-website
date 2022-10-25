import './carousel.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { useState } from 'react';

const Carousel = () => {

    const [carouselIndex, setCarouselIndex] = useState(0);


    const CarouselData = [
        {
            id: 0,
            image: './images/slide-card/slidecard-1.jpg',
        },
        {
            id: 1,
            image: './images/slide-card/slidecard-2.jpg',
        },
        {
            id: 2,
            image: './images/slide-card/slidecard-3.jpg',
        },
        {
            id: 3, 
            image: './images/slide-card/slidecard-4.jpg',
        },
        {
            id: 4,
            image: './images/slide-card/slidecard-5.jpg',
        },
      ]



  return (
    <Carousel>
        <img src="./images/slide-card/slidecard-1.jpg" />
        <img src="./images/slide-card/slidecard-2.jpg" />
        <img src="./images/slide-card/slidecard-3.jpg" />
        <img src="./images/slide-card/slidecard-4.jpg" />
        <img src="./images/slide-card/slidecard-5.jpg" />
    </Carousel>
  )
}

export default Carousel