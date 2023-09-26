import ViewAllBottom from '../view all bottom/viewallbottom';
import ViewAllHeader from '../view all header/view-all-header';
import ViewAllSideImage from '../view all side image/viewallsideimage';
import './view-all-products.css'
const ViewAllProducts = () => {
    return <>
        <div className="max-width view-all-products-outer-container">
            <div className="view-all-products-inner-container">
                <ViewAllHeader collection={`Prep Up For The Valentine's Day`} />
                <ViewAllBottom />
            </div>
            <div className="side-image-container">
                <ViewAllSideImage />
            </div>
        </div>
    </>
}
export default ViewAllProducts;