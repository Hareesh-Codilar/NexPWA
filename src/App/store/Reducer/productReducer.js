import { SET_PRODUCTS } from "../actions/contants/action-type";

const initialState ={
    products:[]
    
}
export const productReducer = (state=initialState, action) => {
    
switch (action.type) {
    case SET_PRODUCTS:
        // let { productDatas } = action.payload;
        return {...state, products: action.payload  }


    default:
        return state
        
}
}