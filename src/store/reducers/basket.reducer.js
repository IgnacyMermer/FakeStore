import { basketConstants } from "../constants/basket.constants"

const initialState = {
    isLoading: false,
    products: [],
    error: null
}

const basketReducer = (state=initialState, action)=>{
    switch(action.type){
        case basketConstants.ADD_TO_BASKET:{
            state={
                ...state,
                isLoading: false,
                error: null,
                products: [...state.products, action.payload]
            }
            break;
        }
        case basketConstants.START_LOADING:{
            state={
                ...state,
                isLoading: true,
                error: null
            }
            break;
        }
        case basketConstants.ON_ERROR:{
            state={
                ...state,
                isLoading: false,
                error: action.error
            }           
            break;
        }
        case basketConstants.REMOVE_FROM_BASKET:{
            state={
                ...state,
                isLoading: false,
                error: null,
                products: state.products.filter(product=>{
                    return product!=action.payload
                })
            }
            break;
        }
        case basketConstants.CHANGE_COUNT_IN_PRODUCTS_LIST:{
            var products = state.products;
            products[action.payload.i].count = action.payload.count;
            state={
                ...state, 
                products
            }
            break;
        }
    }
    return state;
}

export default basketReducer;