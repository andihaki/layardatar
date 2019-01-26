import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Recommendation = ({ recommendations }) => {
  // console.log(recommendations);

  return (
    <div>
      <h3>Rekomendasi Film:</h3>
      <Grid>
        {recommendations.map(data => (
          <div key={data.id}>
            <img
              src={"https://image.tmdb.org/t/p/w200" + data.poster_path}
              alt={data.title}
            />
          </div>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recommendations: state.movies.recommendations
  };
};

export default connect(mapStateToProps)(Recommendation);
