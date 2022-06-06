import { basketConstants } from "../constants/basket.constants"


export const addToBasket = (product)=>{
    return async dispatch=>{
        
        dispatch({type: basketConstants.START_LOADING});

        dispatch({type: basketConstants.ADD_TO_BASKET, payload: product});
        
    }
}

export const removeFromBasket = (product)=>{
    return async dispatch=>{
        
        dispatch({type: basketConstants.REMOVE_FROM_BASKET, payload: product});
        
    }
}

export const changeCountInProductList = (i, count)=>{
    return async dispatch=>{

        dispatch({type: basketConstants.CHANGE_COUNT_IN_PRODUCTS_LIST, payload: {i, count}})

    }
}