import articles from "../apis/articles";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ARTICLE,
  FETCH_ARTICLES,
  FETCH_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createArticle = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await articles.post("/articles", { ...formValues, userId });

  dispatch({ type: CREATE_ARTICLE, payload: response.data });
  history.push("/");
};

export const fetchArticles = () => async (dispatch) => {
  const response = await articles.get("/articles");

  dispatch({ type: FETCH_ARTICLES, payload: response.data });
};

export const fetchArticle = (id) => async (dispatch) => {
  const response = await articles.get(`/articles/${id}`);
  dispatch({ type: FETCH_ARTICLE, payload: response.data });
};

export const editArticle = (id, formValues) => async (dispatch) => {
  const response = await articles.patch(`/articles/${id}`, formValues);

  dispatch({ type: EDIT_ARTICLE, payload: response.data });
  history.push("/");
};

export const deleteArticle = (id) => async (dispatch) => {
  await articles.delete(`/articles/${id}`);
  dispatch({ type: DELETE_ARTICLE, payload: id });
  history.push("/");
};
