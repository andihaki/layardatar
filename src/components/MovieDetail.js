import React from "react";
import { connect } from "react-redux";
import {
  fetchMovies,
  fetchCast,
  fetchSimilar,
  fetchRecommendation,
  fetchReviews
} from "../redux/actions";
import Movie from "./Movie";

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.movies.length);
    this.props.movies.length || this.props.dispatch(fetchMovies());

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);
    this.props.dispatch(fetchCast(movieId));
    this.props.dispatch(fetchSimilar(movieId));
    this.props.dispatch(fetchRecommendation(movieId));
    this.props.dispatch(fetchReviews(movieId));
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

    const Cast = React.lazy(() => import("./Cast"));
    const Similar = React.lazy(() => import("./Similar"));
    const Recommendation = React.lazy(() => import("./Recommendation"));
    const Reviews = React.lazy(() => import("./Reviews"));

    return (
      <React.Fragment>
        <Movie movie={movie} onClick={() => console.log(null)} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Cast />
          <Similar />
          <Recommendation />
          <Reviews />
        </React.Suspense>
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
    casts: state.movies.casts,
    similars: state.movies.similars,
    recommendations: state.movies.recommendations,
    reviews: state.movies.reviews
  };
};

export default connect(mapStateToProps)(MovieDetail);
