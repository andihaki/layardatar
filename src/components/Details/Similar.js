import React from "react";
import { connect } from "react-redux";

const Similar = ({ similars }) => {
  // console.log(similars);
  return (
    <div>
      <h3>Film Serupa:</h3>
      {similars.map(data => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    similars: state.details.similars
  };
};

export default connect(mapStateToProps)(Similar);
