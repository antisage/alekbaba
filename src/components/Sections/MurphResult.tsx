import React, { FC } from 'react';

interface MurphResult {
  title: string;
  imageUrl: string;
  details: string[];
}

const MurphResult: FC<MurphResult> = ({ title, imageUrl, details }) => {
  return (
    <div className="grid-container2">
      <div className="grid-box2 box-12">
        <div className="info2">
        <h2>{title}</h2>
        </div>
        <div className="img2">
        <img src={imageUrl} alt="Placeholder" />
        </div>
      </div>
      <div className="grid-box2 box-22">
        <ul>
          {details.map(detail => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      <style>{`
        .img2{
          width: 26em;
        }
        .info2{
          text-align: center;
          color: white;
          font-size: 2em;
        }
        .grid-container2 {
          padding: 55px;
          display: flex;
          flex-wrap: wrap;
          justify-content: right;
        }
        
        .grid-box2 {
          border: 1px solid black;
          padding: 20px;
        }
        
        .box-12 {
          grid-row: 1;
          grid-column: 1 / span 2;
        }
        
        .box-22 {
          grid-row: 2;
          grid-column: 1 / span 1;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default MurphResult;