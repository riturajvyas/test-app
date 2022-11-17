import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import jwt_decode from 'jwt-decode'
import rootReducer from "./rootReducer";

const storeFactory = () => {
    const middleware = [thunk] //plzRemoveTheToken]
    const reduxStore = createStore(
      rootReducer,//loadFromLocalStorage(),
      composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
      )
    );
     //reduxStore.subscribe(()=> saveToLocalStorage(reduxStore.getState()))
     return reduxStore;
  };
  
  export default storeFactory;