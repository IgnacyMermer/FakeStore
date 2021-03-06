import { productsConstants } from "../constants/products.constants"

export const getAllProducts = (basketProducts)=>{
    return async dispatch=>{
        
        dispatch({type: productsConstants.START_LOADING_PRODUCTS});

        const res = await fetch('https://fakestoreapi.com/products');

        const products = await res.json();

        products.forEach(element => {
            element.count = 1;
            for(var temp in basketProducts){
                if(basketProducts[temp].id==element.id){
                    element.count = basketProducts[temp].count;
                }
            }
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

export const changeCheckedCategory = (i)=>{
    return async dispatch=>{

        dispatch({type: productsConstants.CHANGE_CHECKED, payload: {i: i}});

    }
}