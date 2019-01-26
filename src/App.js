import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h3>TopFlix ~ Tokopedia Flix</h3>
          <h5>Saldo: {this.props.saldo.toLocaleString("id-ID")}</h5>
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
const mapStateToProps = state => {
  return {
    saldo: state.movies.saldo
  };
};
export default connect(mapStateToProps)(App);
