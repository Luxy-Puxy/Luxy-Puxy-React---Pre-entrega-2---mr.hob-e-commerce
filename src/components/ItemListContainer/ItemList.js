import React from 'react';
import "./ItemList.css";
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/detalle/${item.id}`}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
