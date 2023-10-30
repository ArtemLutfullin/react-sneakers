function CartDrawer({ onClickClose, onRemove, items = [] }) {
  return (
    <div className="Overley" onClick={onClickClose}>
      <div onClick={(event) => event.stopPropagation()} className="Drawer">
        <h2 style={{ marginBottom: '30px' }}>
          Корзина{' '}
          <img
            onClick={onClickClose}
            className="CloseBtn"
            src="/SVG/btn-remove.svg"
            alt="CloseBtn"
          />
        </h2>

        {items.length > 0 ? (
          <div className="cartItemContainer">
            {items.map((obj) => (
              <div className="CartItem">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="CardItemImg"
                ></div>
                <div className="CartInfo">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="RemoveBtn"
                  src="/SVG/btn-remove.svg"
                  alt="BtnRemove"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="CartEmpty">
            <img src="/SVG/CartEmpty.jpg" alt="CartEmpty" />
            <h2>Корзина пустая</h2>

            <p className="TextDimmed">
              Добавьте хотя-бы одну пару кроссовок, чтобы сделать заказ
            </p>
            <button onClick={onClickClose} className="GreenButtonBack">
              <img src="/SVG/BackArrow.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
        <div></div>
        {items.length > 0 && (
          <div className="itemss">
            <div className="CartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="GreenButton">
                Оформить заказ <img src="/SVG/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
