import { ADD_TO_CART, DELETE_TO_CART } from "../constants/constant";
const INITIAL_STATE = {
    carts:[]
}

export  const cartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
           let findIndex = state.carts.findIndex((item) => item.id == action.payload.id)
           if (findIndex != -1) {
            //state.carts[findIndex].qnty += 1;
            let data = state.carts.map((el) => el.id == action.payload.id ? {...el, qnty: el.qnty + 1}:  el)
            return {
                ...state,
                carts:data
            }
           } else {
            let item = {...action.payload, qnty:1}
            return {
                ...state,
                carts:[...state.carts, item]
               }
           }
        case DELETE_TO_CART:
           let deleteIndex = state.carts.findIndex((item) => item.id == action.payload)
           if (deleteIndex != -1 && state.carts[deleteIndex].qnty > 1) {
           let data = state.carts.map((el) => el.id == action.payload ? {...el, qnty: el.qnty - 1}:  el)
            return {
                ...state,
                carts:data
            }
           } else {
                let data = state.carts.filter((el) => el.id !== action.payload)
                return {
                    ...state,
                    carts:data
                }
           }
        default:
            return state
    }
}