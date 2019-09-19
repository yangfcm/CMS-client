import axios from "../settings/api";

import { READ_POSTS } from "./types";

/** Read posts */
export const readPosts = page => {
  const currentPage = page || 1;
  return async dispatch => {
    try {
      const response = await axios.get(
        `/api/posts?status=1&page=${currentPage}`
      );
      dispatch({
        type: READ_POSTS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: OPER_POST_ERR,
        payload: e.response ? e.response.data : e.message
      });
    }
  };
};
