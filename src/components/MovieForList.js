import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const InlineH3 = styled.h3`
  display: inline-block;
  margin-bottom: 5px;
`;

const MovieForList = ({ movie }) => {
  // console.log(movie);
  const { title, vote_average, poster_path } = movie;

  return (
    <Link to={movie.slug}>
      <div>
        <InlineH3>{title}</InlineH3> <span>{vote_average}</span>
      </div>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
    </Link>
  );
};

export default MovieForList;
