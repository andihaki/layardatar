import React, { Component } from "react";

import { API } from "./constants";
import Movie from "./components/Movie";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

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

  clickMovieHandler = () => {
    console.log("clicked");
  };

  renderMovies(movies) {
    return movies && movies.length ? (
      <Ul>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            onClick={() => console.log(movie.id)}
          />
        ))}
      </Ul>
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
