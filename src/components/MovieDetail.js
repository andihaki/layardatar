import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions";
import Movie from "./Movie";

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.movies.length);
    this.props.movies.length || this.props.dispatch(fetchMovies());
  }
  render() {
    const { movies, error, loading } = this.props;
    // console.log(movies, error, loading);

    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    // // hmm aneh disini, harus handle movies kosong
    if (loading || !movies.length) {
      return <div>Menunggu kepastian...</div>;
    }

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);
    const movie = movies && movies.filter(data => data.id === movieId)[0];

    // console.log(movies, queryParams, movieId, movie);

    return (
      <React.Fragment>
        <Movie movie={movie} onClick={() => console.log("movieDetail")} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error
  };
};

export default connect(mapStateToProps)(MovieDetail);
