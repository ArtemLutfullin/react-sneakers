import './Header.scss';

import Card from './Card.jsx';
import Head from './Head.jsx';
import CartDrawer from './CartDrawer.jsx';
const Header = () => {
  return (
    <div className="App">
      <CartDrawer />
      <Head />
      <div className="Content">
        <div className="Search">
          <h1>Все кроссовки</h1>
          <div className="SearchBlock">
            <img src="/SVG/Search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="Sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Header;
