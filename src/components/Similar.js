import React from "react";
import { connect } from "react-redux";

const Similar = ({ movieId, similars }) => {
  // console.log(similars);
  return (
    <div>
      <h3>Film Terkait:</h3>
      {similars.map(data => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    similars: state.movies.similars
  };
};

export default connect(mapStateToProps)(Similar);
