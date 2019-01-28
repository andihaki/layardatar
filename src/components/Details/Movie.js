import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

const Grid = styled.div`
  /* display: flex; */
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  min-width: 500px;
`;

const Poster = styled.img`
  margin: auto 10px;

  height: 300px;
  width: 200px;
`;

const Detail = styled.div`
  flex: 1;
  padding: 0px 10px;
  background-color: rgb(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
`;

const Overview = styled.h4`
  color: green;
  margin-bottom: 0px;
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
    margin: 0px auto;
    margin-top: -15px;
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
    backdrop_path,
    genres,
    runtime,
    production_companies
  } = movie;

  // const { genres, runtime, production_companies } = details;

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
            <p>Genre: </p>
            <h3>{genres && genres.map(genre => genre.name + ", ")}</h3>
          </div>
        </HorizontalAlign>
        <HorizontalAlign>
          <div>
            <p>Tanggal Release: </p>
            <h3>{release_date}</h3>
          </div>
          <div>
            <p>Rating: </p>
            <h3>{vote_average} / 10</h3>
          </div>
          <div>
            <p>Durasi: </p>
            <h3>{runtime} Menit</h3>
          </div>
        </HorizontalAlign>
        <HorizontalAlign>
          <div>
            <p>Diproduksi oleh: </p>
            <h3>
              {production_companies &&
                production_companies.map(companies => companies.name + ", ")}
            </h3>
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
const mapStateToProps = state => {
  // console.log(state.movies.details);
  return {
    movie: state.details.details
  };
};
export default connect(mapStateToProps)(Movie);
