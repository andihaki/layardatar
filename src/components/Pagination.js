import React from "react";
import { connect } from "react-redux";

import { changePage } from "../redux/actions";

import { Link } from "react-router-dom";

const Pagination = ({ pages, dispatch }) => {
  // console.log(pages);
  return (
    // <Router>
    <React.Fragment>
      {pages &&
        pages.map(page => (
          // <button key={page} onClick={() => dispatch(changePage(page))}>
          <Link to={{ pathname: "/", search: `?page=${page}` }}>
            <button key={page} onClick={() => dispatch(changePage(page))}>
              {page}
            </button>
          </Link>
          // </button>
        ))}
    </React.Fragment>
    // </Router>
  );
};

const mapStateToProps = state => {
  return {
    pages: state.movies.pages
  };
};

export default connect(mapStateToProps)(Pagination);
