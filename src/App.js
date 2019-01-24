import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Pagination />
          <MovieList />
          {/* <Pagination totalMovies={18} pageLimit={2} /> */}
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
