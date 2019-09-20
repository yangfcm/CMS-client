import {
  READ_COMMENTS,
  CREATE_COMMENT,
  OPER_COMMENT_ERR
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case READ_COMMENTS:
      return { ...action.payload, error: null };
    case CREATE_COMMENT:
      return { ...action.payload, error: null };
    case OPER_COMMENT_ERR:
      return { error: action.payload };
    default:
      return state;
  }
};
