import {
  FETCH_SEARCH_BEGIN,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE
} from "./actionTypes";

import { API_SEARCH } from "../constants";

// movie SEARCH
export const fetchSearchBegin = () => ({
  type: FETCH_SEARCH_BEGIN
});

export const fetchSearchSuccess = search => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: { search }
});

export const fetchSearchFailure = error => ({
  type: FETCH_SEARCH_FAILURE,
  payload: { error }
});

export const fetchSearch = keyword => {
  // console.log(FETCH_SEARCH_BEGIN, keyword);
  return dispatch => {
    dispatch(fetchSearchBegin());

    return fetch(API_SEARCH.replace("keyword", keyword))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data.results);
        dispatch(fetchSearchSuccess(data.results));

        return data.results;
      })
      .catch(error => dispatch(fetchSearchFailure(error)));
  };
};
