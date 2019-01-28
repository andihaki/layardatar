import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import SearchIcon from "../../assets/search-icon.svg";

import { fetchSearch } from "../../redux/actions";

const Ul = styled.ul`
  /* position: fixed; */
  display: flex;
  background-color: black;
  color: white;
  list-style: none;
  margin-top: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  overflow: hidden;
  min-width: 500px;
`;

const Li = styled.li`
  /* flex: 1 1 0; */
  &:first-child {
    margin-right: auto;
  }
  margin: 0 20px;

  &:last-child {
    margin-left: 30px;
  }

  a {
    color: white;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const SearchInput = styled.input`
  /* padding: 12px; */
  font-size: 26px;
`;

const NavBar = ({ saldo, dispatch }) => {
  // mungkin anti-pattern nih
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;

  return (
    <Ul>
      <Li>
        <Link to="/">
          <h3>TokoFlix</h3>
        </Link>
      </Li>
      <Li>
        <Link to="/search">
          <SearchInput
            type="text"
            placeholder="cari film"
            name="search"
            ref={input => {
              textInput = input;
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              dispatch(fetchSearch(textInput.value));
              textInput.value = "";
            }}
          />
        </Link>
      </Li>
      <Li>
        <h5>Saldo: {saldo.toLocaleString("id-ID")}</h5>
      </Li>
      <Li>
        <Link to="/filmku">Filmku</Link>
      </Li>
    </Ul>
  );
};

const mapStateToProps = state => {
  return {
    saldo: state.ordered.saldo
  };
};

export default connect(mapStateToProps)(NavBar);
