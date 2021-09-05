import React from 'react'
import "./product.css"
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../stateProvider/stateProvider';

function Product({ id, title, price, rating, image }) {
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
    const [{ }, dispatch] = useStateValue()

    const addToBasket = () => {
        return (
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    rating: rating
                }
            })
        )
    }


    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price"><strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>
                                <StarIcon />
                            )
                    }
                    < Nonstar />
                </div>

            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
