import {
  FETCH_CAST_BEGIN,
  FETCH_CAST_SUCCESS,
  FETCH_CAST_FAILURE,
  FETCH_SIMILAR_BEGIN,
  FETCH_SIMILAR_SUCCESS,
  FETCH_SIMILAR_FAILURE,
  FETCH_RECOMMENDATION_BEGIN,
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_REVIEWS_BEGIN,
  FETCH_REVIEWS_FAILURE,
  FETCH_REVIEWS_SUCCESS,
  FETCH_DETAILS_BEGIN,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE
} from "../actionTypes";

import createSlug from "../../utils/createSlug";

const initialState = {
  loading: false,
  error: null,
  casts: [],
  similars: [],
  recommendations: [],
  reviews: [],
  details: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAST_BEGIN:
      return { ...state, casts: [] };
    case FETCH_CAST_SUCCESS:
      return {
        ...state,
        casts: action.payload.casts
      };
    case FETCH_CAST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        casts: []
      };
    case FETCH_SIMILAR_BEGIN:
      return { ...state, similars: [] };
    case FETCH_SIMILAR_SUCCESS:
      const similars = action.payload.similars.length
        ? action.payload.similars
        : [{ id: 0, title: "tidak ada informasi film terkait" }];
      return {
        ...state,
        similars
      };
    case FETCH_SIMILAR_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        similars: []
      };
    case FETCH_RECOMMENDATION_BEGIN:
      return { ...state, recommendations: [] };
    case FETCH_RECOMMENDATION_SUCCESS:
      // console.log("FETCH_RECOMMENDATION", action.payload.recommendations);
      const recommendations = action.payload.recommendations.length
        ? action.payload.recommendations
        : [{ id: 0, title: "tidak ada informasi film terkait" }];
      return {
        ...state,
        recommendations
      };
    case FETCH_RECOMMENDATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        recommendations: []
      };
    case FETCH_REVIEWS_BEGIN:
      return { ...state, reviews: [] };
    case FETCH_REVIEWS_SUCCESS:
      const reviews = action.payload.reviews.length
        ? action.payload.reviews
        : [{ id: 0, title: "tidak ada review" }];
      return {
        ...state,
        reviews
      };
    case FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        reviews: []
      };
    case FETCH_DETAILS_BEGIN:
      return { ...state, details: {} };
    case FETCH_DETAILS_SUCCESS:
      let details = action.payload.details;

      let price = 3500;
      const rating = details.vote_average;

      if (rating > 3 && rating <= 6) {
        price = 8250;
      }
      if (rating > 6 && rating <= 8) {
        price = 16350;
      }
      if (rating > 8 && rating <= 10) {
        price = 21250;
      }

      const slug = createSlug(details.id)(details.title);

      details = {
        ...details,
        price,
        slug
      };

      return {
        ...state,
        details
      };
    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        details: {}
      };
    default:
      return state;
  }
}
