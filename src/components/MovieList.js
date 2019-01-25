import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import styled from "styled-components";

import { fetchMovies, movieDetail } from "../redux/actions";

import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const Ul = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

class MovieList extends React.Component {
  state = {
    onePage: false,
    id: null
  };
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  renderMovieDetail = title => {
    console.log("rMD", title);
    this.props.dispatch(movieDetail(title));
    // return <Redirect push to="/sample" />;
    // this.setState({ onePage: true });
  };
  render() {
    const {
      movies,
      loading,
      error,
      currentPage,
      limitPage,
      movieId
    } = this.props;

    console.log(movieId, limitPage * (currentPage - 1) + movieId);
    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    if (loading) {
      return <div>Menunggu kepastian...</div>;
    }

    const sliceStart = limitPage * currentPage - limitPage;
    const sliceEnd = limitPage * currentPage;

    return (
      // <React.Fragment>
      //   {this.props.movieId === "" ? (
      //     <Ul>
      //       {movies.slice(sliceStart, sliceEnd).map(movie => (
      //         <Link to={movie.slug} key={movie.id}>
      //           <Movie
      //             movie={movie}
      //             onClick={() => this.renderMovieDetail(movie.index)}
      //           />
      //         </Link>
      //       ))}
      //     </Ul>
      //   ) : (
      //     <MovieDetail title="test" />
      //   )}
      // </React.Fragment>
      <Ul>
        {movies.slice(sliceStart, sliceEnd).map(movie => (
          <Link to={movie.slug} key={movie.id}>
            <Movie
              movie={movie}
              onClick={() => this.renderMovieDetail(movie.index)}
            />
          </Link>
        ))}
      </Ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    error: state.movies.error,
    currentPage: state.movies.currentPage,
    limitPage: state.movies.limitPage,
    movieId: state.movies.movieId
  };
};

export default connect(mapStateToProps)(MovieList);
