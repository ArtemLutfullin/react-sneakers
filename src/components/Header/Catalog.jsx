import './Header.scss';
import React from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Catalog = () => {
  const [items, setItems] = React.useState([]);

  const [Favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios
      .get('https://651abd73340309952f0dc81f.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    // axios
    //   .get('https://651abd73340309952f0dc81f.mockapi.io/cart')
    //   .then((res) => {
    //     setCartItems(res.data);
    //   });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://651abd73340309952f0dc81f.mockapi.io/cart', obj); //бесплатный лемит кончился на создание ресурсов поэтому /cart
    // setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = (obj) => {
    axios.post('https://6526a55b917d673fd76cb4ba.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="Content">
        <div className="Search">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="SearchBlock">
            <img src="/SVG/Search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="ClearSearch"
                src="/SVG/btn-remove.svg"
                alt="CloseBtn"
              />
            )}
            <input
              onChange={onChangeSearchValue}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        {items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        ).length <= 0 && <h2>По вашему запросу ничего не найдено</h2>}
        <div className="Sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
