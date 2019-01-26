import React from "react";
import { Link } from "react-router-dom";

const MovieForList = ({ movie, onClick }) => {
  // console.log(movie);
  const { id, title, release_date, vote_average, poster_path, price } = movie;

  return (
    <li key={id} onClick={onClick}>
      <Link to={movie.slug}>
        {title} - {release_date} - {vote_average}
        <img
          src={"https://image.tmdb.org/t/p/w200" + poster_path}
          alt={title}
        />
      </Link>
      <p>
        Harga <span>{price}</span>
        <button>Beli</button>
      </p>
    </li>
  );
};

export default MovieForList;
