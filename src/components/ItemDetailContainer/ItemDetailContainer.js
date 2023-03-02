import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const BoardGames = [
  { id: 1, name: 'Mage Knight', image: 'https://playsdgames.com/wp-content/uploads/2016/04/CAJA_3D-MageKnight.png', category: 'BoardGames', description:"Mage Knight is a miniatures wargame using collectible figures, created by WizKids, Inc, and is the earliest example of what is now known as a collectible miniatures game (or CMG)." },
  { id: 2, name: 'Spirit Island', image: 'https://cdn11.bigcommerce.com/s-ueh8vl5d4c/images/stencil/1280x1280/products/1327/7571/spiritislandesp__24748.1617948089.jpg?c=2', category: 'BoardGames', description:'Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers. Every turn, players simultaneously choose which of their power cards to play, paying energy to do so.' },
  { id: 3, name: 'Res Arcana', image: 'https://m.media-amazon.com/images/I/91ZGhkYz6jL.__AC_SX300_SY300_QL70_FMwebp_.jpg', category: 'BoardGames', description:'Res Arcana pits two to four wizards in a contest to show each other who is the best spellslinger of them all. You are going to do this by buying monuments, acquiring places of power, using magic items, and conjuring artifacts as you try to race your way to ten victory' },
  { id: 4, name: 'Yugioh', image: 'https://cdn.shoplightspeed.com/shops/645495/files/36759315/1652x1652x2/konami-yugioh-dawn-of-majesty-booster-display.jpg', category: 'TCG' },
  { id: 5, name: 'Pokemon', image: 'https://themonkeyplanet.com.pe/wp-content/uploads/2023/01/booster-ds_pokemon_sv_-600x600.png', category: 'TCG' },
  { id: 6, name: 'Digimon TCG', image: 'https://themanashop.ch/50868-thickbox_default/digimon-card-game-special-booster-display-ver10-24-packs.jpg', category: 'TCG' },
];

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(BoardGames);
      }, 1000);
    });

    getData.then(res => {
      const item = res.find(item => item.id === parseInt(detalleId));
      setData(item);
    });
  }, [detalleId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
