import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Pagination />
          {/* <MovieList /> */}
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
