import "./slider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    {direction === "next" ? <FaArrowAltCircleRight/> : <FaArrowAltCircleLeft/>}
    </button>
  );
}