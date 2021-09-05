import React from 'react'
import "./product.css"
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
