import React, { Component } from "react";

import MovieList from "./components/MovieList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
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
