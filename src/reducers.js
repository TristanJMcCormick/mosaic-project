import { GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "./actions";

const initialState = {
  articles: [],
  queryResponseCount: 0,
  loadingNews: false,
  error: "",
  currentQuery: ""
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        totalResults: action.payload.totalResults,
        loadingNews: false,
        error: false
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        articles: [],
        loadingNews: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
