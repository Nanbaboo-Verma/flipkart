import './header.css'
import flipkart from './flipkart-plus.png'
const Header = () => {
    return <>
        <div className="header-outer-container">
            <div className="header-inner-container">
                <div className="header-left-side-button">
                    <div className='flikart-container'>
                        <a href="flipKart">
                            <img src={flipkart} alt="" className='flipkart-text-image' />
                        </a>
                        <div className='explore-plus'>
                            <a href="explore-plus" className='explore-plus-anger'>
                                <span className='explore-content'> Explore</span>
                                <span class="plus-content"> Plus</span>
                                <img width='10' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
                            </a>
                        </div>
                    </div>
                    {/* Search Field */}
                    <div className="search-text-container">
                        <input type="text" placeholder='Search for products, branchs and more' className="serach-text" />
                        <i className="fa search-icon">&#xf002;</i>
                    </div>
                </div>


                {/* Login button */}
                <div className="header-right-side-button">
                    <div className="login-button-container">
                        <a href="login" className="login-button">Login</a>
                    </div>
                    {/* more button */}
                    <div className="more-container-button">
                        <a href="more" className="more-button">More</a>
                    </div>
                    <div className='cart-container'>
                        <a href="cart" className='cart-container-button'>
                            <i className="fa cart-container-button-icon">&#xf07a;</i>Cart
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default Header;