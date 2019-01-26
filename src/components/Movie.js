import React from "react";

const Movie = ({ movie, onClick }) => {
  // console.log(movie);
  const {
    id,
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    backdrop_path,
    price
  } = movie;

  return (
    <li key={id} onClick={onClick}>
      {title} - {release_date} - {vote_average}
      <p>{overview || "Maaf, tidak ada dekripsi"}</p>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
      <img
        src={
          backdrop_path
            ? "https://image.tmdb.org/t/p/w200" + backdrop_path
            : "#"
        }
        alt={title}
      />
      <p>
        Harga <span>{price}</span>
        <button>
          <h1>Beli</h1>
        </button>
      </p>
    </li>
  );
};
// const Movie = ({ data }) => console.log(data);
export default Movie;
