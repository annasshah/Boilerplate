import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from '../reducers/cartReducer';
import userAuthReducer from '../reducers/userAuthReducer';
import productsReducer from '../reducers/productsReducer';

const reducer = combineReducers({
    cartReducer,
    userAuthReducer,
    productsReducer,

})


const store = createStore(reducer,applyMiddleware(thunk))


export default store