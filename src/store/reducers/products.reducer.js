import { productsConstants } from "../constants/products.constants"


const initialState = {
    isLoading: false,
    products: [],
    error: null
}

const productsReducer = (state=initialState, action)=>{
    switch(action.type){
        case productsConstants.GET_ALL_PRODUCTS:{
            state={
                ...state,
                isLoading: false,
                products: action.payload,
                error: null
            }
            break;
        }
        case productsConstants.START_LOADING:{
            state={
                ...state,
                error: null,
                isLoading: true
            }
            break;
        }
        case productsConstants.ON_ERROR:{
            state={
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        }
        case productsConstants.CHANGE_COUNT_PRODUCT:{
            var products = state.products;
            for(var temp in products){
                if(products[temp].id==action.payload.id){
                    products[temp].count=action.payload.count;
                }
            }
            state={
                ...state,
                products: products
            }
            break;
        }
    }
    return state;
}



export default productsReducer;