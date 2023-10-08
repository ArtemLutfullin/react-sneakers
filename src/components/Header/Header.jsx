import './Header.scss';
import React from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import Head from './Head.jsx';
import CartDrawer from './CartDrawer.jsx';

const Header = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [CardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://651abd73340309952f0dc81f.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      {CardOpened && (
        <CartDrawer
          items={cartItems}
          onClickClose={() => setCardOpened(false)}
        />
      )}
      <Head onClickCart={() => setCardOpened(true)} />
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
                onFavorite={() => console.log('Сердечко')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
