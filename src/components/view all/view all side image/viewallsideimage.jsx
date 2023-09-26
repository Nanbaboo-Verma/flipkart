import './viewallsideimage.css'
import sideimage from './sideimage.jpg'
const ViewAllSideImage = () => {
    return <>
        <img src={sideimage} alt="" className="sideImage" />
        {/* <div>
            <div className="side-image-container">
                <img src={sideimage} alt="" className="sideImage" />
            </div>
        </div> */}
    </>
}
export default ViewAllSideImage;