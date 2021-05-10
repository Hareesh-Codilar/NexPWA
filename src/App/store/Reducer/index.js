import {combineReducers} from 'redux';
import { menuReducer } from './MenuReducers';
import { productDetailsReducer } from './productDetailReducer';
import { productReducer } from './productReducer';

const reducers=combineReducers({
    allPoducts:productReducer,
    menuProducts:menuReducer,
    productDeatil:productDetailsReducer,
})
export  default reducers;