import _ from "lodash";
import {
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ARTICLE:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
