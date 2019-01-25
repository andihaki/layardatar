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
import Cast from "./Cast";
import Similar from "./Similar";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.movies.length);
    console.log("a", this.props.casts);
    this.props.movies.length || this.props.dispatch(fetchMovies());

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);
    this.props.dispatch(fetchCast(movieId));
    this.props.dispatch(fetchSimilar(movieId));
    this.props.dispatch(fetchRecommendation(movieId));
    this.props.dispatch(fetchReviews(movieId));
  }

  render() {
    const { movies, error, loading, casts, similars } = this.props;
    const { recommendations, reviews } = this.props;
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

    const movieCast = casts.length ? (
      <Cast movieId={movieId} />
    ) : (
      <div>Fetching cast</div>
    );
    const movieSimilar = similars.length ? (
      <Similar movieId={movieId} />
    ) : (
      <div>
        Fetching rating, durasi film, harga film, indikator pengguna memiliki
        film
      </div>
    );
    const movieRecommendation = recommendations.length ? (
      <Recommendation />
    ) : (
      <div>
        Fetching rating, durasi film, harga film, indikator pengguna memiliki
        film
      </div>
    );
    const movieReviews = reviews.length ? (
      <Reviews />
    ) : (
      <div>
        Fetching rating, durasi film, harga film, indikator pengguna memiliki
        film
      </div>
    );

    return (
      <React.Fragment>
        <Movie movie={movie} onClick={() => console.log(null)} />
        {movieCast}
        {movieSimilar}
        {movieRecommendation}
        {movieReviews}
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
