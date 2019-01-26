import React from "react";

const WatchMovie = ({ ordered, price, onClick }) => (
  <div>
    {ordered ? (
      <p>
        <button>Tonton Sekarang</button>
      </p>
    ) : (
      <p onClick={onClick}>
        Harga <span>{price.toLocaleString("id-ID")}</span>
        <button>Beli</button>
      </p>
    )}
  </div>
);

export default WatchMovie;
