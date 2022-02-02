import {
  CLEAR_ERRORS,
  VISITOR_CREATE_FAIL,
  VISITOR_CREATE_REQUEST,
  VISITOR_CREATE_SUCCESS,
} from "../constants/visitorConstants";

export const createVisitorReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_CREATE_REQUEST:
      return { loading: true };
    case VISITOR_CREATE_SUCCESS:
      return { loading: false, success: true };
    case VISITOR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
