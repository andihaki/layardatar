import React from "react";
import { connect } from "react-redux";

import { changePage } from "../../redux/actions";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  margin: 0 4px;
  text-align: center;

  &.active {
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
  }

  &:hover:not(.active) {
    background-color: #ddd;
    border-radius: 5px;
    transition: background-color 0.4s;
  }
`;

const Div = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Pagination = ({ pages, dispatch, currentPage }) => {
  // console.log(currentPage);
  return (
    <Div>
      {pages &&
        pages.map(page => (
          <StyledLink
            key={page}
            to={{ pathname: "/", search: `?page=${page}` }}
            onClick={() => dispatch(changePage(page))}
            activeClassName={page === currentPage ? "active" : ""}
          >
            {page}
          </StyledLink>
        ))}
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    pages: state.movies.pages,
    currentPage: state.movies.currentPage
  };
};

export default connect(mapStateToProps)(Pagination);
