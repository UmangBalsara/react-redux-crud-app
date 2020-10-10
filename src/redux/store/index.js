import { createStore, applyMiddleware } from "redux";
//import rootReducer from "../AddProject/rootReducer";
import projectReducer from "../AddProject/reducer";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  //rootReducer,
  projectReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
  //window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //  window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;
