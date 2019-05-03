import { connect } from "react-redux";
import { getNews } from "./thunks";
import App from "./App";

const mapDispatchToProps = dispatch => {
  return {
    getNews: (query, page) => {
      dispatch(getNews(query, page));
    }
  };
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    totalResults: state.totalResults,
    error: state.error
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
