import ApiFetcher from "./fetcher";
import { getNewsSuccess, getNewsError } from "./actions";

export function getNews(query, page) {
  return function(dispatch) {
    return ApiFetcher.get(query, page).then(
      response => {
        console.debug("got articles");
        dispatch(getNewsSuccess(response));
      },
      error => {
        console.debug("got error");
        dispatch(getNewsError(error));
      }
    );
  };
}
