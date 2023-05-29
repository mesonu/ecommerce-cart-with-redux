import { combineReducers } from "redux";

//import all created reducer
import { cartReducer } from "./reducer";


const rootReducer = combineReducers({
    cartReducer
})

export default rootReducer;