import axios from "../settings/api";

import { READ_COMMENTS, CREATE_COMMENT, OPER_COMMENT_ERR } from "./types";

/** Read comments under a post */
export const readComments = (id, page = null) => {
  const url = page
    ? `/api/comments/post/${id}?page=${page}`
    : `/api/comments/post/${id}`;
  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: READ_COMMENTS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: OPER_COMMENT_ERR,
        payload: e.message
      });
    }
  };
};

/** Create a comment */
export const createComment = data => {
  return async dispatch => {
    try {
      const response = await axios.post("/api/comments", data);
      dispatch({
        type: CREATE_COMMENT,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: OPER_COMMENT_ERR,
        payload: e.message
      });
    }
  };
};
