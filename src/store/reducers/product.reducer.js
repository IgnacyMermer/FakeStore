import { productConstants } from "../constants/product.constants"


const initialState = {
    isLoading: false,
    product: {},
    error: null
}

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case productConstants.GET_PRODUCT:{
            state={
                isLoading: false,
                product: action.payload,
                error: null
            }
            break;
        }
        case productConstants.START_LOADING_PRODUCT:{
            state={
                ...state,
                isLoading: true,
                product: {},
                error: null
            }
            break;
        }
        case productConstants.ON_ERROR_PRODUCT  :{
            state={
                ...state,
                isLoading: false,
                error: action.error
            }
        }
    }
    return state;
}

export default productReducer;