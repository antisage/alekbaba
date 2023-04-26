import React, { FC } from 'react';

interface Murph {
  title: string;
  location: string;
  time: string;
  imageUrl: string;
  details: string;
}

const Grid: FC<Murph> = ({ title, location, time, imageUrl, details }) => {
  return (
    <div className="grid-container">
      <div className="grid-box box-1">
        <h2>{title}</h2>
        <h3>{location}</h3>
        <h3>{time}</h3>
      </div>
      <div className="grid-box box-2">
        <img src={imageUrl} alt="Placeholder" />
        <p>{details}</p>
      </div>
      <style>{`
        .grid-container {
          padding: 35px;
          display: flex;
          justify-content: center;
        }
        
        .grid-box {
          border: 1px solid black;
          padding: 20px;
        }
        
        .box-1 {
          grid-row: 1;
          grid-column: 1 / span 2;
        }
        
        .box-2 {
          grid-row: 2;
          grid-column: 1 / span 1;
          display: flex;
          align-items: center;
        }
        
        .box-2 img {
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
};

export default Grid;