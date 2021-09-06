import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./productcheckout.css"
import { useStateValue } from '../stateProvider/stateProvider';




function ProductCheckOut({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue()


    const Nonstar = () => {
        const number = 5 - rating
        return (
            Array(number)
                .fill()
                .map((_) =>
                    <StarBorderIcon />
                )
        )
    }

    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id: id,

        })
    }


    return (

        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} alt="" />
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price"><strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>
                                <StarIcon />
                            )
                    }
                    < Nonstar />
                </div>
                <button onClick={RemoveFromBasket}>Remove to Basket</button>
            </div>
        </div>

    )
}

export default ProductCheckOut
