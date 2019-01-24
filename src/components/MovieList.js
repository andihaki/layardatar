import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import styled from "styled-components";

import { fetchMovies } from "../redux/actions";

const Ul = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

class MovieList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  render() {
    const { movies, loading, error } = this.props;
    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    if (loading) {
      return <div>Menunggu kepastian...</div>;
    }
    return (
      <Ul>
        {movies.slice(0, 2).map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            onClick={() => console.log(movie.id)}
          />
        ))}
      </Ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error
  };
};

export default connect(mapStateToProps)(MovieList);
