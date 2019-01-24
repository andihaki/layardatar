import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <Ul>
        {movies.map(movie => (
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
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps)(MovieList);
