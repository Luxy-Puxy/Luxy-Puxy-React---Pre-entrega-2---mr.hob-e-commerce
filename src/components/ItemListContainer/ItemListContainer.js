import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Mage Knight', image: 'https://playsdgames.com/wp-content/uploads/2016/04/CAJA_3D-MageKnight.png', category: 'BoardGames' },
      { id: 2, name: 'Spirit Island', image: 'https://cdn11.bigcommerce.com/s-ueh8vl5d4c/images/stencil/1280x1280/products/1327/7571/spiritislandesp__24748.1617948089.jpg?c=2', category: 'BoardGames' },
      { id: 3, name: 'Res Arcana', image: 'https://m.media-amazon.com/images/I/91ZGhkYz6jL.__AC_SX300_SY300_QL70_FMwebp_.jpg', category: 'BoardGames' },
      { id: 4, name: 'Yugioh', image: 'https://cdn.shoplightspeed.com/shops/645495/files/36759315/1652x1652x2/konami-yugioh-dawn-of-majesty-booster-display.jpg', category: 'TCG' },
      { id: 5, name: 'Pokemon', image: 'https://themonkeyplanet.com.pe/wp-content/uploads/2023/01/booster-ds_pokemon_sv_-600x600.png', category: 'TCG' },
      { id: 6, name: 'Digimon TCG', image: 'https://themanashop.ch/50868-thickbox_default/digimon-card-game-special-booster-display-ver10-24-packs.jpg', category: 'TCG' },
    ];

    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });

    if (category) {
      getData.then(res => res.filter(item => item.category === category))
             .then(res => setData(res));
    } else {
      getData.then(res => setData(res));
    }
  }, [category]);

  return (
    <div>
      <h2>Products</h2>
      <ItemList items={data} />
    </div>
  );
};

export default ItemListContainer;
