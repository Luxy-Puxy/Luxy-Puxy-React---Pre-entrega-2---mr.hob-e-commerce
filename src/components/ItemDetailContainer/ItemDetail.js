import React from 'react';
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.name}</h1>
        </div>
      </div> {}
      <div className="description">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;