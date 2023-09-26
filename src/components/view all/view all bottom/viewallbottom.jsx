import './viewallbottom.css'
const ViewAllBottom = () => {
    const viewProducts = [
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kwtkxow0/poncho/d/m/s/free-pv-3602-peach-pivl-original-imag9ffph3wzd5cg.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kh80vww0-0/thermal/n/0/n/90-lux-cott-bl-fs-rn-tro-set-lux-cottswool-original-imafbha4g3puyatj.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kv6zvrk0/cap/n/r/g/free-wc-nec-broen-original-imag85fzv5pazybx.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kfzq8i80/sweatshirt/b/6/v/xl-tnvsweatskulbeard1-tripr-original-imafwbq59rhm5zmu.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kv6zvrk0/cap/n/r/g/free-wc-nec-broen-original-imag85fzv5pazybx.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kfzq8i80/sweatshirt/b/6/v/xl-tnvsweatskulbeard1-tripr-original-imafwbq59rhm5zmu.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },
    ]
    return <>
        <div className="view-all-bottom-container">
            {viewProducts.map((items) => {
                return <>
                    <div className="view-all-bottom-items">
                        <img src={items.url} alt="img" className="product-view-images" />
                        <div className="content-container">
                            <p className="view-content1">{items.content1}</p>
                            <p className="view-content2">{items.content2}</p>
                        </div>
                    </div>
                </>
            })}
            <div className="slide-right-products-container">
                <button className="slide-products-items" >{">"}</button>
            </div>
        </div>
    </>
}
export default ViewAllBottom;