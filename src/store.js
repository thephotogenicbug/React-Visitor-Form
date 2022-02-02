import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createVisitorReducer } from "./reducer/visitorReducer";

const reducer = combineReducers({
  visitor: createVisitorReducer
});

let initialState = {}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
