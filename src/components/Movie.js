import React from "react";

import styled from "styled-components";

const Grid = styled.div`
  /* display: flex; */
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
`;

const Poster = styled.img`
  margin: 10px;
`;

const Detail = styled.div`
  flex: 1;
  padding: 0px 10px;
  background-color: rgb(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
`;

const Overview = styled.h4`
  color: green;
`;

const HorizontalAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 100%;

  div {
    flex: 1;
  }

  h3 {
    color: green;
  }
`;

const Movie = ({ movie }) => {
  // console.log(movie);
  const {
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    backdrop_path
  } = movie;

  return (
    <Grid backgroundUrl={"https://image.tmdb.org/t/p/original" + backdrop_path}>
      <Poster
        src={"https://image.tmdb.org/t/p/w200" + poster_path}
        alt={title}
      />
      <Detail>
        <h1>{title}</h1>
        <Overview>{overview || "Maaf, tidak ada dekripsi"}</Overview>
        <HorizontalAlign>
          <div>
            <p>Tanggal Release: </p>
            <h3>{release_date}</h3>
          </div>
          <div>
            <p>Rating: </p>
            <h3>{vote_average}</h3>
          </div>
        </HorizontalAlign>
      </Detail>
      {/* <img
        src={
          backdrop_path
            ? "https://image.tmdb.org/t/p/w200" + backdrop_path
            : "#"
        }
        alt={title}
      /> */}
    </Grid>
  );
};
// const Movie = ({ data }) => console.log(data);
export default Movie;
