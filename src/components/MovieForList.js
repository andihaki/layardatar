import React from "react";
import { Link } from "react-router-dom";

const MovieForList = ({ movie, onClick, ordered }) => {
  // console.log(movie);
  const { id, title, release_date, vote_average, poster_path, price } = movie;

  const watchMovie = ordered ? (
    <p>
      <button>Tonton Sekarang</button>
    </p>
  ) : (
    <p>
      Harga <span>{price}</span>
      <button>Beli</button>
    </p>
  );

  return (
    <li key={id} onClick={onClick}>
      <Link to={movie.slug}>
        {title} - {release_date} - {vote_average}
        <img
          src={"https://image.tmdb.org/t/p/w200" + poster_path}
          alt={title}
        />
      </Link>
      {watchMovie}
    </li>
  );
};

export default MovieForList;
