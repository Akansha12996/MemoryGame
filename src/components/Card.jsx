import React from "react";
import "./Card.css";
const Card = (props) => {
  const { id, src, text, backimgsrc, onClick, flipped } = props;

  return (
    <div
      id={`${id}_container`}
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <div className="card_inner">
        <div className="card_front">
          <img src={src} alt="Front" />
          <span className="card_name">{text}</span>
        </div>
        <div className="card_back">
          <img src={backimgsrc} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default Card;
