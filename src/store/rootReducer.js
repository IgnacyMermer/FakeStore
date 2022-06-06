import { combineReducers } from "redux";
import basketReducer from "./reducers/basket.reducer";
import productReducer from "./reducers/product.reducer";
import productsReducer from './reducers/products.reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    product: productReducer
})

export default rootReducer;