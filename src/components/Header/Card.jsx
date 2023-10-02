import React from 'react';
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className="Card">
      <div className="Favorite" onClick={props.onClickFavorite}>
        <img src="/SVG/HeartUnLiked.svg" alt="UnLiked" />
      </div>
      <img width={160} height={120} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="CardBottom">
        <div className="CardPrice">
          <p>Цена:</p>
          <b className="CardPriceB">{props.price} руб.</b>
        </div>
        <img
          style={{ cursor: 'pointer' }}
          onClick={onClickPlus}
          src={isAdded ? '/svg/PlusLiked.svg' : '/svg/plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
