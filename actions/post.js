import axios from "../settings/api";

import { READ_POSTS, OPER_POST_ERR } from "./types";

/** Read posts */
export const readPosts = (page, categoryId = null, tagId = null) => {
  const currentPage = page || 1;
  let apiUrl = `/api/posts?status=1&page=${currentPage}`;
  if (categoryId) {
    apiUrl += `&category=${categoryId}`;
  }
  if (tagId) {
    apiUrl += `&tag=${tagId}`;
  }
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({
        type: READ_POSTS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: OPER_POST_ERR,
        payload: e.response ? e.response.data.message : e.message
      });
    }
  };
};
