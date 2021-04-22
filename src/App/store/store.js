import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from "./Reducer";

const store =createStore(reducers,applyMiddleware(thunk),);

export default store

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()