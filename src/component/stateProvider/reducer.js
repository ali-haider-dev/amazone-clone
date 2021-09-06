import { act } from "@testing-library/react";

export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);




const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]

            };

        case "REMOVE_TO_BASKET":
            // here we clone the basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                //item exist in basket remove it
                newBasket.splice(index, 1)
            }
            else {
                console.log("4rf5tf5t")
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer