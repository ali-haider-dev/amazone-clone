import React from 'react'
import "./Checkout.css"
import ProductCheckOut from './ProductCheckOut';

import { useStateValue } from "../stateProvider/stateProvider";
import SubTotal from '../subTotal/SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue()


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping  Basket is Empty </h2>
                        <strong>you have no item in the basket.To buy one or more item ,click "add to baket" next to the item </strong>
                    </div>


                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {
                            basket.map((item) => (
                                <ProductCheckOut
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                )}
            </div>

            {basket.length >= 0 &&
                <div className="checkout__right">
                    <SubTotal />
                </div>

            }
        </div >
    )
}

export default Checkout
