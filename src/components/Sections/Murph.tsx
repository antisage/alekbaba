import React, { FC } from 'react';

interface Murph {
  title: string;
  location: string;
  time: string;
  imageUrl: string;
  details: string[];
}

const Murph: FC<Murph> = ({ title, location, time, imageUrl, details }) => {
  return (
    <div className="grid-container">
      <div className="grid-box box-1">
        <div className="info">
        <h2><u>{title}</u></h2>
        <h3>{location}</h3>
        <h3>{time}</h3>
        </div>
        <div className="img1">
          <img src={imageUrl} alt="Placeholder" />
        </div>
      </div>
      <div className="grid-box box-2">
        <ul>
          {details.map(detail => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      <style>{`

        .img1{
          width: 26em;
          height: 10em;
          object-fit: cover;
        }
        .info{
          text-align: center;
          color: white;
          font-size: 2em;
        }
        .grid-container {
          padding: 55px;
          display: flex;
          flex-wrap: wrap;
          justify-content: left;
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
      `}</style>
    </div>
  );
};

export default Murph;