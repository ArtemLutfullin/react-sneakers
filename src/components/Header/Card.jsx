import React from 'react';
function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({title, imageUrl, price});
    setIsFavorite(!isFavorite);
  }
  return (
    <div className="Card">
      <div className="Favorite" onClick={onClickFavorite}>
        <img src={isFavorite ? '/svg/HeartLiked.svg' : '/svg/HeartUnLiked.svg'} alt="UnLiked" />
      </div>
      <img width={160} height={120} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="CardBottom">
        <div className="CardPrice">
          <p>Цена:</p>
          <b className="CardPriceB">{price} руб.</b>
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
