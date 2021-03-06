import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider/stateProvider';
import { getBasketTotal } from '../stateProvider/reducer';


function SubTotal() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal({basket.length} items):<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contain a gift
                        </small>
                    </>
                )}


                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                prefix={"$"}
                thousandSeparator={true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
