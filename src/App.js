import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    currentQuery: "",
    currentPage: 1
  };

  updateQuery = e => {
    const { value } = e.target;
    this.setState({ currentQuery: value });
  };

  submitSearch = () => {
    this.props.getNews(this.state.currentQuery);
  };

  handlePageForward = () => {
    this.props.getNews(this.state.currentPage + 1);
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1
      };
    });
  };

  handlePageBackward = () => {
    const newPage = this.state.currentPage - 1;
    this.props.getNews(this.state.currentQuery, newPage);
    this.setState(prevState => {
      return {
        currentPage: newPage
      };
    });
  };

  renderPagination = () => {
    if (!this.props.articles.length) {
      return null;
    }

    const paginationNodes = [];
    if (this.state.currentPage > 1) {
      paginationNodes.push(
        <span key="back" onClick={this.handlePageBackward}>
          Previous Page
        </span>
      );
    }
    paginationNodes.push(
      <span key="page-number">Page Number: {this.state.currentPage}</span>
    );
    if (this.props.totalResults > 10 * this.state.currentPage) {
      paginationNodes.push(
        <span key="next" onClick={this.handlePageForward}>
          Next Page
        </span>
      );
    }
    return paginationNodes;
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateQuery} />
        <button onClick={this.submitSearch}>Search News</button>
        {this.props.articles.map((article, index) => {
          const { title, description, author, url } = article;
          return (
            <div key={index}>
              <span>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </span>
              <span>----</span>
              <span>{author}</span>
              <div>{description}</div>
            </div>
          );
        })}
        {this.renderPagination()}
        <p>
          This application makes use of the{" "}
          <a
            href="http://www.newsapi.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NewsAPI
          </a>
          .
        </p>
      </div>
    );
  }
}

export default App;
