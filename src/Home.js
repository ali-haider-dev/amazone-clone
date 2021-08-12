import React from 'react'
import "./home.css"
import Product from './Product.js'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <h1>I am the Home Page!!</h1>
            <Product
                id="123123"
                title="The learn startup"
                price={11.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_B01,204,203,200_.jpg"

            />
        </div>
    )
}

export default Home;