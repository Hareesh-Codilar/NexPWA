import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { productReducer } from "./Reducer/productReducer";


const store =createStore(productReducer,applyMiddleware(thunk));

export default store

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()