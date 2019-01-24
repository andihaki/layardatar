import React from "react";
import { connect } from "react-redux";

import { changePage } from "../redux/actions";

const Pagination = ({ pages, dispatch }) => {
  // console.log(pages);
  return (
    <React.Fragment>
      {pages &&
        pages.map(page => (
          <button key={page} onClick={() => dispatch(changePage(page))}>
            {page}
          </button>
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
