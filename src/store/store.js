import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import secretReducer from "../reducers/secretReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let reducers = combineReducers({
  secret: secretReducer,
  form: formReducer
});

let middleware = applyMiddleware(thunk, logger);

let store = createStore(reducers, middleware);

export default store;