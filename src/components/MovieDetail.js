import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions";
// const MovieDetail = ({ title, match }) => {
//   console.log("Movie detail", match.params.id);
//   return (
//     <div>
//       Test: {title} {match.params.id}
//     </div>
//   );
// };

class MovieDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.movies.length || this.props.dispatch(fetchMovies());
  }
  render() {
    return <div>Test</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps)(MovieDetail);
