import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

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
`;

const NavBar = ({ saldo }) => (
  <Ul>
    <Li>
      <h3>TopFlix ~ Tokopedia Flix</h3>
    </Li>
    <Li>
      <h5>Saldo: {saldo.toLocaleString("id-ID")}</h5>
    </Li>
    <Li>Wishlist</Li>
  </Ul>
);

const mapStateToProps = state => {
  return {
    saldo: state.movies.saldo
  };
};

export default connect(mapStateToProps)(NavBar);
