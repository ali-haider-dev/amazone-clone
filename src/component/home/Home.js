import React from 'react'
import "./home.css"
import Product from '../product/Product.js'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="123123"
                    title="The learn startup csjckscnksjbcksajbckjsabcksabckjasbnckasbcksab"
                    price={11.9}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01_204,203,200_.jpg"

                />
                <Product
                    id="1231234"
                    title="BLACK+DECKER Lightweight Hand Mixer, White, MX1500W"
                    price={19.28}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/710J7T4v5KL._AC_SL1500_.jpg"

                />
            </div>
            <div className="home__row">
                <Product
                    id="1231235"
                    title="Apple Watch Series 5 (GPS, 44mm) - Silver Aluminum Case with White Sport Band with AppleCare+ Bundle "
                    price={50.07}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61puvr+oEBL._AC_SL1500_.jpg"

                />  <Product
                    id="1231236"
                    title="Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound "
                    price={11.9}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/81qTTdKhiOL._AC_SL1500_.jpg"

                />
                <Product
                    id="1231237"
                    title="Apple iPhone 11 Pro Max, 512GB, Midnight Green - Unlocked (Renewed Premium)"
                    price={931}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71yIGykJFNS._AC_SL1500_.jpg"

                />
            </div>
            <div className="home__row">
                <Product
                    id="1231238 "
                    title="Samsung LC49J890DKNXZA 49 C49J890DKN 3840x1080 Super Ultra-Wide Monitor with USB-C for Business (Renewed)"
                    price={1139.16}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61SwvGcxYwL._AC_SL1000_.jpg"

                />
            </div>



        </div>
    )
}

export default Home;
// https://images-na.ssl-images-.com/images/I/51Zymoq7Unl._SX325_B01,204,203,200_.jpg