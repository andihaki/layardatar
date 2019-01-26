import React from "react";
import { connect } from "react-redux";
import MovieForList from "./MovieForList";
import styled from "styled-components";

import { fetchMovies, buyMovie } from "../redux/actions";

import WatchMovie from "./WatchMovie";

import Pagination from "./Pagination";

const Ul = styled.ul`
  list-style: none;

  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

class MovieList extends React.Component {
  state = {
    onePage: false,
    id: null
  };
  componentDidMount() {
    this.props.movies.length || this.props.dispatch(fetchMovies());
  }

  render() {
    const { movies, loading, error, currentPage, limitPage } = this.props;
    const { orders } = this.props;

    // console.log(movieId, limitPage * (currentPage - 1) + movieId);
    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    if (loading) {
      return <div>Menunggu kepastian...</div>;
    }

    // for pagination
    const sliceStart = limitPage * currentPage - limitPage;
    const sliceEnd = limitPage * currentPage;

    return (
      <React.Fragment>
        <Pagination />
        <Ul>
          {movies.slice(sliceStart, sliceEnd).map(movie => (
            <li key={movie.id}>
              <MovieForList movie={movie} />
              <WatchMovie
                ordered={orders.includes(movie.id)}
                price={movie.price}
                onClick={() => this.props.dispatch(buyMovie(movie.id))}
              />
            </li>
          ))}
        </Ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.movies.orders);
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    currentPage: state.movies.currentPage,
    limitPage: state.movies.limitPage,
    movieId: state.movies.movieId,
    orders: state.movies.orders
  };
};

export default connect(mapStateToProps)(MovieList);
