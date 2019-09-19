import { READ_POSTS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case READ_POSTS:
      return { ...action.payload };
    default:
      return state;
  }
};
