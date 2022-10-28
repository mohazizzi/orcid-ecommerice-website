import Baner from '../../components/baner/Baner';
import Brand from '../../components/brand/Brand';
import Category from '../../components/category/Category';
import Discount from '../../components/discount/Discount';
import Slider from '../../components/slider/Slider';

function Home() {
    return (
      <>
        <Slider/>
        <Discount/>
        <Category/>
        <Baner firstBanerIndex={0} secondBanerIndex = {1}/>
        <Brand/>
        <Baner firstBanerIndex={2} secondBanerIndex = {3}/>
      </>
    );
  }
  
  export default Home;
  