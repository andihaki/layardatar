import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Pagination />
          {/* <MovieList /> */}
          {/* <Pagination totalMovies={18} pageLimit={2} /> */}
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
