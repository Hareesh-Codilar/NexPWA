import {combineReducers} from 'redux';
import { menuReducer } from './MenuReducers';
import { productReducer } from './productReducer';

const reducers=combineReducers({
    allPoducts:productReducer,
    menuProducts:menuReducer,
})
export  default reducers;