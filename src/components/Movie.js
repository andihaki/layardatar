import React from "react";

const Movie = ({ movie }) => {
  const {
    id,
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    backdrop_path
  } = movie;
  return (
    <li key={id}>
      {title} - {release_date} - {vote_average}
      <p>{overview || "Maaf, tidak ada dekripsi"}</p>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
      <img
        src={"https://image.tmdb.org/t/p/w200" + backdrop_path}
        alt={title}
      />
    </li>
  );
};
// const Movie = ({ data }) => console.log(data);
export default Movie;
