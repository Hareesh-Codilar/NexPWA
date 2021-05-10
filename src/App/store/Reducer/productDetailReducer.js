import { PRODUCT_DETAILS } from "../actions/contants/action-type";

const initialState = {
  productDetail: [],
};
export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
};
