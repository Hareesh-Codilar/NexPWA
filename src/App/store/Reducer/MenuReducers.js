import { MENU_PRODUCTS } from "../actions/contants/action-type";

const initialState ={
    menuProducts:[]
    
}
export const menuReducer = (state=initialState, action) => {
    
switch (action.type) {
    case MENU_PRODUCTS:
        let { productDatas } = action.payload;
        return {...state, menuProducts: productDatas}


    default:
        return state
        
}
}