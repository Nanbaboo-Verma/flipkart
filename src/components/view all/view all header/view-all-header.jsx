import './view-all-header.css'
const ViewAllHeader = ({ collection, mens }) => {
    return <>
        <div className="view-all-outer-container">
            <div className="view-all-inner-container">
                <p className="view-all-paragraph">{collection}{mens}</p>
                <button className="view-all-button">VIEW ALL</button>
            </div>
        </div>
    </>
}
export default ViewAllHeader;