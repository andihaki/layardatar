import React from "react";
import { connect } from "react-redux";
import MovieForList from "./MovieForList";
import styled from "styled-components";

import { buyMovie } from "../redux/actions";

import WatchMovie from "./WatchMovie";

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

class OrderedMovie extends React.Component {
  render() {
    const { orderedMovies, orders } = this.props;

    return (
      <React.Fragment>
        <Ul>
          {orderedMovies.map(movie => (
            <Li key={movie.id}>
              <MovieForList movie={movie} />
              <WatchMovie
                ordered={orders.includes(movie.id)}
                price={movie.price}
                onClick={() => this.props.dispatch(buyMovie(movie.id))}
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
    orderedMovies: state.movies.orderedMovies,
    orders: state.movies.orders
  };
};

export default connect(mapStateToProps)(OrderedMovie);
