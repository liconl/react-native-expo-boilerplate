import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

const configureStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;
