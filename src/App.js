import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

// const Pagination = ({ totalMovies, pageLimit }) => {
//   const totalPages = Math.ceil(totalMovies / pageLimit);
//   const range = Array(totalPages)
//     .fill()
//     .map((x, i) => i + 1);
//   return (
//     <React.Fragment>
//       <span>Sebelumnya</span> | <span>Selanjutnya {range}</span>
//     </React.Fragment>
//   );
// };

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Pagination />
        <MovieList />
        {/* <Pagination totalMovies={18} pageLimit={2} /> */}
      </React.Fragment>
    );
  }
}
export default App;
