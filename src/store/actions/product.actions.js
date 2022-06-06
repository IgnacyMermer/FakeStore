import { productConstants } from "../constants/product.constants"


export const getProduct = (id)=>{
    return async dispatch=>{
        try{

            dispatch({type: productConstants.START_LOADING_PRODUCT});

            const res = await fetch(('https://fakestoreapi.com/products/'+id.toString()));

            const product = await res.json();

            dispatch({type: productConstants.GET_PRODUCT, payload: product});

        }
        catch(e){
            dispatch({type: productConstants.ON_ERROR_PRODUCT, error: e});
        }
    }
}