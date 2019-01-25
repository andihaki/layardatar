import React from "react";
import { connect } from "react-redux";

const Reviews = ({ reviews }) => {
  // console.log(reviews);
  return (
    <div>
      <h3>Rekomendasi Film:</h3>
      {reviews.map(data => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.movies.reviews
  };
};

export default connect(mapStateToProps)(Reviews);
