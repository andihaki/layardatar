import React from "react";
import { connect } from "react-redux";

const Cast = ({ casts }) => {
  return (
    <div>
      <h3>Pemain Film:</h3>
      {casts.map(cast => (
        <div key={cast.cast_id}>
          <b>{cast.name}</b> sebagai <b>{cast.character}</b>
          <img
            src={"https://image.tmdb.org/t/p/w92" + cast.profile_path}
            alt={cast.name}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    casts: state.movies.casts
  };
};

export default connect(mapStateToProps)(Cast);
