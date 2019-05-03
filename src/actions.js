export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_ERROR = "GET_NEWS_ERROR";

export const getNewsSuccess = ({ articles, totalResults }) => {
  return {
    type: GET_NEWS_SUCCESS,
    payload: { articles, totalResults }
  };
};

export const getNewsError = error => {
  return {
    type: GET_NEWS_ERROR,
    payload: { error }
  };
};
