import React from "react";
import { connect } from "react-redux";
import MovieForList from "../MovieForList";
import styled from "styled-components";

import { fetchMovies, buyMovie } from "../../redux/actions";

import WatchMovie from "../WatchMovie";

const Ul = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Li = styled.li`
  display: table-cell;
  text-align: center;

  a {
    text-decoration: none;
    color: black;
  }
`;

class Search extends React.Component {
  componentDidMount() {
    this.props.movies.length || this.props.dispatch(fetchMovies());
  }

  render() {
    const { movies, loading, error } = this.props;
    const { orders } = this.props;

    if (error) {
      return <div>Oops, ada sikomo lewat. {error.message}</div>;
    }
    if (loading) {
      return <div>Menunggu kepastian...</div>;
    }

    return (
      <React.Fragment>
        <h1>Hasil Pencarian: </h1>
        {/* <Pagination /> */}
        <Ul>
          {/*movies.slice(sliceStart, sliceEnd)*/ movies.map(movie => (
            <Li key={movie.id}>
              <MovieForList movie={movie} />
              <WatchMovie
                ordered={orders.includes(movie.id)}
                price={movie.price}
                onClick={() => this.props.dispatch(buyMovie(movie))}
              />
            </Li>
          ))}
        </Ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.movies.orders);
  return {
    movies: state.search.search,
    loading: state.search.loading,
    error: state.search.error,
    orders: state.ordered.orders
  };
};

export default connect(mapStateToProps)(Search);
