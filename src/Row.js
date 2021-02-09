import React from "react";
import "./row.scss";

function Row({ img, p, price }) {
  return (
    <div className="formalcards">
      <img src={img} alt="formal" />
      <p>
        {p} <br />
        <br /> {price}{" "}
      </p>
    </div>
  );
}

export default Row;
