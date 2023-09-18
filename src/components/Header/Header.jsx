import './Header.scss';
import Card from './Card.jsx';
import Head from './Head.jsx';
import CartDrawer from './CartDrawer.jsx';
import Sneakers1 from '../../assets/img/sneakers/1.jpg';
import Sneakers2 from '../../assets/img/sneakers/2.jpg';
import Sneakers3 from '../../assets/img/sneakers/3.jpg';
import Sneakers4 from '../../assets/img/sneakers/4.jpg';

const arr = [
  {
    title: ' Мужские Кроссовки Nike Blazer Mid Suede ',
    price: 12999,
    imageUrl: Sneakers1,
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270 ',
    price: 14299,
    imageUrl: Sneakers2,
  },
  {
    title: ' Мужские Кроссовки Nike Blazer Mid Suede ',
    price: 8499,
    imageUrl: Sneakers3,
  },
  {
    title: ' Кроссовки Puma X Aka Boku Future Rider ',
    price: 8999,
    imageUrl: Sneakers4,
  },
];

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
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
