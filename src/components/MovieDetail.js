import React from "react";
import { connect } from "react-redux";
import { fetchMovies, buyMovie, fetchDetails } from "../redux/actions";
// import Movie from "./Movie";

// import WatchMovie from "./WatchMovie";

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.movies.length);
    this.props.movies.length || this.props.dispatch(fetchMovies());

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);

    this.props.dispatch(fetchDetails(movieId));
  }

  render() {
    const { movies, loading, orders, details } = this.props;
    // console.log(movies, error, loading);

    // if (error) {
    //   return <div>Oops, ada sikomo lewat. {error.message}</div>;
    // }
    // // hmm aneh disini, harus handle movies kosong
    if (loading) {
      console.log("test", loading, movies, details);
      return <div>Menunggu kepastian...</div>;
    }

    const queryParams = this.props.match.params.id;
    const movieId = parseInt(queryParams.split("-")[0]);
    // let movie = movies.length && movies.filter(data => data.id === movieId)[0];
    // console.log(movie);
    // if (!movie || !movie.length) {
    //   return <div>Menunggu kepastian...</div>;
    // }

    const Cast = React.lazy(() => import("./Cast"));
    const Similar = React.lazy(() => import("./Similar"));
    const Recommendation = React.lazy(() => import("./Recommendation"));
    const Reviews = React.lazy(() => import("./Reviews"));
    const Movie = React.lazy(() => import("./Movie"));
    const WatchMovie = React.lazy(() => import("./WatchMovie"));

    console.log(this.props.orderedMovies);

    return (
      <React.Fragment>
        {/* <Movie movie={movie} details={details} />
        <WatchMovie
          ordered={orders.length ? orders.includes(movie.id) : false}
          price={movie ? movie.price : 0}
          onClick={() => this.props.dispatch(buyMovie(movie.id))}
        /> */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <Movie />
          <WatchMovie
            ordered={orders.includes(movieId)}
            price={Object.keys(details).length ? details.price : 3500}
            onClick={() => this.props.dispatch(buyMovie(movieId))}
          />
          <Cast />
          <Similar />
          <Recommendation
          // onClick={data => console.log(data)}
          />
          <Reviews />
        </React.Suspense>
        <p>
          This page inspired by{" "}
          <a
            href="https://skempin.github.io/reactjs-tmdb-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this
          </a>
        </p>
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
    reviews: state.movies.reviews,
    orders: state.movies.orders,
    details: state.movies.details,
    orderedMovies: state.movies.orderedMovies
  };
};

export default connect(mapStateToProps)(MovieDetail);
