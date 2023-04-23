
import { createStore , applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import reducer from './index'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(
     reducer ,
     enhancer(applyMiddleware(reduxThunk))
     );

export default store;