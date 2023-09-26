import { useState } from "react/cjs/react.development";
// import ViewAllBottom from "../view all/view all bottom/viewallbottom";
import ViewAllHeader from "../view all/view all header/view-all-header";
import "../view all/view all bottom/viewallbottom.css";
// import "../view all/view all header/view-all-header.css";
import "./men'sfootwear.css";
const MensFootwear = () => {

    const mensProducts = [
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/kk2wl8w0/shoe/5/i/x/5g-827-10-campus-gry-d-gry-original-imafzg47myvmcukh.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/k5e7o280/shoe/f/k/z/104878-7-puma-black-biscay-green-white-original-imafm5d34bm6bqss.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },

        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/k0bbb0w0/shoe/p/h/g/192581-9-puma-white-black-nrgy-red-original-imafk52jrgr3gagg.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/jyafukw0/shoe/m/k/z/gc-2657117olive-green-40-woodland-olive-green-original-imafgjmaednvuyjx.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/ks3jjbk0/shoe/6/c/t/7-51778-7-wildcraft-grey-blue-original-imag5qjfmkgu3fwt.jpeg?q=70',
            'content1': "Blankets",
            'content2': 'Wxplore Now!'
        },
        {
            'url': 'https://rukminim1.flixcart.com/image/150/150/k0bbb0w0/shoe/p/h/g/192581-9-puma-white-black-nrgy-red-original-imafk52jrgr3gagg.jpeg?q=70',
            'content1': "Women's Mufflers",
            'content2': 'New Range'
        },
    ]

    return <>
        <div className="max-width mens-outer-container">
            <ViewAllHeader mens={`Men's Footwear`} />
            <div className="mens-inner-container">
                {mensProducts.map((items) => {
                    return <>
                        <div className="mens-items">
                            <img src={items.url} alt="img" className="mens-images" />
                            <div className="content-containers">
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
        </div>
    </>
}
export default MensFootwear;