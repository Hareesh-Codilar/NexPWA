import { MENU_PRODUCTS } from "../actions/contants/action-type";

const initialState ={
    menuProducts:[]
    
}
export const menuReducer = (state=initialState, action) => {
    
switch (action.type) {
    case MENU_PRODUCTS:
        // let { pay } = action.payload;
        return {...state, menuProducts: action.payload}


    default:
        return state
        
}
}