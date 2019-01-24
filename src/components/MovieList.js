import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import styled from "styled-components";

import { fetchMovies } from "../redux/actions";

import { Route } from "react-router-dom";

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
    const { movies, loading, error, currentPage, limitPage } = this.props;
    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    if (loading) {
      return <div>Menunggu kepastian...</div>;
    }

    const sliceStart = limitPage * currentPage - limitPage;
    const sliceEnd = limitPage * currentPage;

    return (
      <Ul>
        {movies.slice(sliceStart, sliceEnd).map(movie => (
          <Route
            to={`${movie.id}-${movie.title.replace(/ /g, "-")}`}
            key={movie.id}
          >
            <Movie
              key={movie.id}
              movie={movie}
              onClick={() => console.log(movie.id)}
            />
          </Route>
        ))}
      </Ul>
    );
  }
}

const mapStateToProps = state => {
  // console.log(
  //   state.movies.currentPage === 1
  //     ? state.movies.currentPage - 1
  //     : state.movies.currentPage + state.movies.limitPage - 1
  // );
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    currentPage: state.movies.currentPage,
    limitPage: state.movies.limitPage
  };
};

export default connect(mapStateToProps)(MovieList);
