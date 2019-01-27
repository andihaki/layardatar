import React, { Component } from "react";

import MovieList from "./components/MovieList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

import NavBar from "./components/NavBar";
import OrderedMovie from "./components/OrderedMovie";

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location}</code>
      </h3>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          {/* <MovieList /> */}
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/filmku" component={OrderedMovie} />
            {/* <Route exact strict path="/:id" component={MovieDetail} /> */}
            <Route
              exact
              strict
              path="/:id"
              render={({ match }) => {
                if (!/^\d{6}-.*/.test(match.params.id)) {
                  return <NoMatch location={match.params.id} />;
                }
                return <MovieDetail match={match} />;
              }}
            />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
