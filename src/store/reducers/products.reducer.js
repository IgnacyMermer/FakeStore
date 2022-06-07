import { productsConstants } from "../constants/products.constants"


const initialState = {
    isLoading: false,
    products: [],
    categories: [],
    checkedCategories: [],
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
        case productsConstants.START_LOADING_PRODUCTS:{
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
        case productsConstants.GET_ALL_CATEGORIES:{
            state={
                ...state,
                categories: action.payload
            }
            break;
        }
        case productsConstants.CHANGE_CHECKED:{
            state.categories[action.payload.i].isChecked = !state.categories[action.payload.i].isChecked;
            if(state.categories[action.payload.i].isChecked){
                state.checkedCategories.push(state.categories[action.payload.i].category);
            }
            else{
                var index = state.checkedCategories.indexOf(state.categories[action.payload.i].category);
                if(index!=-1){
                    state.checkedCategories.splice(index, 1);
                }
            }
            state={
                ...state,
                categories: state.categories,
                checkedCategories: state.checkedCategories
            }
            break;
        }
    }
    return state;
}



export default productsReducer;