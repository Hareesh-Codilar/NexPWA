import { SET_PRODUCTS } from '../contants/action-type'
const initialState ={
    products:[]
    
}
export const productReducer = (state=initialState, action) => {
    
switch (action.type) {
    case SET_PRODUCTS:
        let { productDatas } = action.payload;
        return {...state, products: productDatas}


    default:
        return state
        
}
}