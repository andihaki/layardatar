import React from "react";

import styled from "styled-components";

const Button = styled.p`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  /* display: initial; */
  font-size: 16px;
  cursor: pointer;
  margin-top: 3px;
`;

const WatchMovie = ({ ordered, price, onClick }) => (
  <div>
    {ordered ? (
      <Button>Tonton Sekarang</Button>
    ) : (
      <Button onClick={onClick}>
        Harga: <span>{price.toLocaleString("id-ID")}</span>, Beli?
      </Button>
    )}
  </div>
);

export default WatchMovie;
