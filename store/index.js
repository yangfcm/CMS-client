import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import postReducer from "../reducers/post";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const store = createStore(
    combineReducers({
      post: postReducer
    }),
    compose(applyMiddleware(thunk))
  );
  return store;
};

// const store = configStore();

export default configStore;
