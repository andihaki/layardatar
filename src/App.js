import React, { Component } from "react";

import { API } from "./constants";
import Movie from "./components/Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results, isLoading: false }))
      .catch(function(error) {
        console.log(error);
      });
  }

  renderMovies(movies) {
    return movies && movies.length ? (
      <ul>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    ) : (
      <div>loading</div>
    );
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    console.log(movies);

    return <div>{this.renderMovies(movies)}</div>;
  }
}

export default App;
