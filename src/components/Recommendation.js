import React from "react";
import { connect } from "react-redux";

const Recommendation = ({ recommendations }) => {
  // console.log(recommendations);
  return (
    <div>
      <h3>Rekomendasi Film:</h3>
      {recommendations.map(data => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recommendations: state.movies.recommendations
  };
};

export default connect(mapStateToProps)(Recommendation);
