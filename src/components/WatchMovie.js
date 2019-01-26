import React from "react";

const WatchMovie = ({ ordered, price, onClick }) => (
  <div onClick={onClick}>
    {ordered ? (
      <p>
        <button>Tonton Sekarang</button>
      </p>
    ) : (
      <p>
        Harga <span>{price}</span>
        <button>Beli</button>
      </p>
    )}
  </div>
);

export default WatchMovie;