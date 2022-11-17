import { combineReducers } from "redux";
import reducer from "./reducer";


 const rootReducer = combineReducers({ reducer});
 export type rootState =  ReturnType<typeof rootReducer>
 export default rootReducer;