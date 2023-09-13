import Content from '../../assets/img/plus.svg';
import Sneakers1 from '../../assets/img/sneakers/1.jpg';

function Card() {
  return (
    <div className="Card">
      <div className="Favorite">
        <img src="/SVG/HeartUnLiked.svg" alt="UnLiked" />
      </div>
      <img width={160} height={120} src={Sneakers1} alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="CardBottom">
        <div className="CardPrice">
          <p>Цена:</p>
          <b className="CardPriceB">12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src={Content} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
