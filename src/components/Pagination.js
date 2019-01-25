import React from "react";
import { connect } from "react-redux";

import { changePage } from "../redux/actions";

import { Link } from "react-router-dom";

const Pagination = ({ pages, dispatch }) => {
  // console.log(pages);
  return (
    <React.Fragment>
      {pages &&
        pages.map(page => (
          <Link key={page} to={{ pathname: "/", search: `?page=${page}` }}>
            <button onClick={() => dispatch(changePage(page))}>{page}</button>
          </Link>
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
