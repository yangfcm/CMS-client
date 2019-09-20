import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import postReducer from "../reducers/post";
import commentReducer from "../reducers/comment";
import { reducer as formReducer } from "redux-form";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const store = createStore(
    combineReducers({
      post: postReducer,
      form: formReducer,
      comment: commentReducer
    }),
    compose(applyMiddleware(thunk))
  );
  return store;
};

// const store = configStore();

export default configStore;
