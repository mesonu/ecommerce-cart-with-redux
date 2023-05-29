import { ADD_TO_CART, DELETE_TO_CART, UPDATE_TO_CART } from "../constants/constant.js";

export const ADD  = (item) => {
    return {
        type:ADD_TO_CART,
        payload:item
    }
}


//remove/delete item from the cart
export const DELETE  = (id) => {
    return {
        type:DELETE_TO_CART,
        payload:id
    }
}