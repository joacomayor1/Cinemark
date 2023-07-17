import React, { useState } from 'react';
import "../App.css"

const Card = ({ image, h5, txt, setSelectedMovie, movie }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePlayClick = () => {
    setSelectedMovie(movie);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const shortTxt = txt.slice(0, 100);
  const displayTxt = expanded ? txt : shortTxt + (txt.length > 100 ? '...' : '');

  return (
    <div className="col-md-4">
      <div className="card-container">
        <div className="card">
          <img src={image} className="card-img-top" alt="IMG NOT FOUND" />
          <div className="card-body">
            <h5 className="card-title">{h5}</h5>
            <p className="card-text">
              {displayTxt}
              {!expanded && txt.length > 100 && (
                <button onClick={handleExpandClick} className="btn  ">
                  <span className="text-blue">Read more</span>
                </button>
              )}
            </p>
            {expanded && (
              <div className="center">
                <button onClick={handleExpandClick} className="btn">
                  <span className="text-blue">Read less</span>
                </button>
              </div>
            )}
            <div className="center">
              <button onClick={handlePlayClick} className="button-64">
                <span className="text">Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
