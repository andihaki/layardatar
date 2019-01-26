import React from "react";
import { Link } from "react-router-dom";

const MovieForList = ({ movie }) => {
  // console.log(movie);
  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div>
      <Link to={movie.slug}>
        {title} - {release_date} - {vote_average}
        <img
          src={"https://image.tmdb.org/t/p/w200" + poster_path}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default MovieForList;
