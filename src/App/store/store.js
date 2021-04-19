import {applyMiddleware, createStore} from "redux";
import { productReducer } from "./actions/reducers/productReducer";
// import reducers from "./reducers/index"
import thunk from 'redux-thunk';


const store =createStore(productReducer,applyMiddleware(thunk));

export default store

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()