import { productsConstants } from "../constants/products.constants"

export const getAllProducts = ()=>{
    return async dispatch=>{
        
        dispatch({type: productsConstants.START_LOADING});

        const res = await fetch('https://fakestoreapi.com/products');

        const products = await res.json();

        products.forEach(element => {
            element.count = 1;
        });

        dispatch({type: productsConstants.GET_ALL_PRODUCTS, payload: products});
    }
}

export const changeCount = (id, count)=>{
    return async dispatch=>{

        dispatch({type:productsConstants.CHANGE_COUNT_PRODUCT, payload: {id, count}});

    }
}

export const getAllCategories = ()=>{
    return async dispatch=>{

        const res = await fetch('https://fakestoreapi.com/products/categories');

        const categories = await res.json();

        var categoriesObjects = [];

        categories.forEach(category=>{
           categoriesObjects.push({
               category,
               isChecked: false
           })
        });

        dispatch({type: productsConstants.GET_ALL_CATEGORIES, payload: categoriesObjects});
    }
}