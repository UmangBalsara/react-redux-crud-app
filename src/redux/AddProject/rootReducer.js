import { combineReducers } from "redux";
import projectReducer from "./reducer";

const rootReducer = combineReducers({
  projectReducer: projectReducer,
});

export default rootReducer;
