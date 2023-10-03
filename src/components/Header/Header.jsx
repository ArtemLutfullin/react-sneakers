import './Header.scss';
import React from 'react';
import Card from './Card.jsx';
import Head from './Head.jsx';
import CartDrawer from './CartDrawer.jsx';

const Header = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [CardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://651abd73340309952f0dc81f.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

    const onAddToCart = (obj) => { 
      setCartItems(prev => [...prev, obj]);
    }
  return (
    <div className="App">
      {CardOpened && <CartDrawer items = {cartItems} onClickClose={() => setCardOpened(false)} />}
      <Head onClickCart={() => setCardOpened(true)} />
      <div className="Content">
        <div className="Search">
          <h1>Все кроссовки</h1>
          <div className="SearchBlock">
            <img src="/SVG/Search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="Sneakers">
          {items.map((item) => (
            <Card
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
