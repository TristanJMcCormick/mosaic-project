const BASE_URL = "https://newsapi.org/v2/";

class ApiFetcher {
  static get(query, page) {
    let requestPath = `${BASE_URL}everything/?q=${query}&pageSize=10`;

    if (page) {
      requestPath += `&page=${page}`;
    }

    var requestHeaders = new Headers();
    requestHeaders.append("Authorization", process.env.REACT_APP_NEWS_API_KEY);

    const apiRequest = new Request(requestPath, {
      headers: requestHeaders
    });

    return fetch(apiRequest).then(resp => {
      if (resp.status === 200) {
        return resp.json().then(body => {
          console.debug(body);
          return body;
        });
      } else {
        return "Could not find articles";
      }
    });
  }
}

export default ApiFetcher;
