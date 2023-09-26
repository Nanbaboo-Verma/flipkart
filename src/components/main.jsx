import './main.css'
import Header from "./header section/header";
import HeaderBottomSection from './header-bottom-section/headerbottomsection';
import "./common-code-css/common-code.css";

import ImageSlider from './image-slider/imageslider';
import ViewAllProducts from './view all/view all products/view-all-products';
import MensFootwear from './men\'s-footwear/men\'sfootwear';
import Bottom from './bottom/bottom';


const Main = () => {
    return <>

        <div className="main-outer-container">
            <Header />
            <div className="main-inner-container">
                <HeaderBottomSection />
                <ImageSlider />
                <ViewAllProducts />
                <MensFootwear />
                <Bottom />

            </div>
        </div>
    </>
}
export default Main;