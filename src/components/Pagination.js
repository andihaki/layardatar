import React from "react";
import { connect } from "react-redux";

import { changePage } from "../redux/actions";

import { BrowserRouter as Router, Link } from "react-router-dom";

const Pagination = ({ pages, dispatch }) => {
  // console.log(pages);
  return (
    <React.Fragment>
      {pages &&
        pages.map(page => (
          <Router>
            <button key={page} onClick={() => dispatch(changePage(page))}>
              <Link to={{ pathname: "/", search: `?page=${page}` }}>
                {page}
              </Link>
            </button>
          </Router>
        ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    pages: state.movies.pages
  };
};

export default connect(mapStateToProps)(Pagination);
