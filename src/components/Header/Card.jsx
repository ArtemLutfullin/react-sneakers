import Content from '../../assets/img/plus.svg';
function Card(props) {
  return (
    <div className="Card">
      <div className="Favorite">
        <img src="/SVG/HeartUnLiked.svg" alt="UnLiked" />
      </div>
      <img width={160} height={120} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="CardBottom">
        <div className="CardPrice">
          <p>Цена:</p>
          <b className="CardPriceB">{props.price} руб.</b>
        </div>
        <button className="button" onClick={() => alert(123)}>
          <img width={11} height={11} src={Content} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
