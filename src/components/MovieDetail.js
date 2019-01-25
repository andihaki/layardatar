import React from "react";
import { connect } from "react-redux";
import { fetchMovies, fetchMovieCredit } from "../redux/actions";
import Movie from "./Movie";

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.movies.length);
    this.props.movies.length || this.props.dispatch(fetchMovies());

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);
    this.props.dispatch(fetchMovieCredit(movieId));
  }

  render() {
    const { movies, error, loading, movieDetail } = this.props;
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

    const movieCast = movieDetail.length ? (
      movieDetail.map(detail => <div>{detail.name}</div>)
    ) : (
      <div>
        Fetching cast, rating, durasi film, harga film, indikator pengguna
        memiliki film
      </div>
    );

    return (
      <React.Fragment>
        <Movie movie={movie} onClick={() => console.log(null)} />
        {movieCast}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    movieDetail: state.movies.movieDetail
  };
};

export default connect(mapStateToProps)(MovieDetail);
