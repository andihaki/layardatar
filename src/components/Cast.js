import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import ImageNotFound from "../image-not-found.svg";

const Img = styled.img`
  border-radius: 10%;
  min-height: 138px;
  min-width: 94px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 20%;
  padding: 5px;
  max-width: 125px; /* did the trick, so it didn't justify */
`;

const Figure = styled.figure``;

const Cast = ({ casts }) => {
  return (
    <div>
      <h3>Pemain Film:</h3>
      <Row>
        {casts.map(cast => (
          <Column key={cast.cast_id}>
            <Figure>
              <Img
                src={
                  cast.profile_path
                    ? "https://image.tmdb.org/t/p/w92" + cast.profile_path
                    : ImageNotFound
                }
                alt={cast.name}
              />
              <figcaption>
                <b>{!cast.profile_path && cast.name}</b> sebagai{" "}
                <b>{cast.character}</b>
              </figcaption>
            </Figure>
          </Column>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    casts: state.movies.casts
  };
};

export default connect(mapStateToProps)(Cast);
