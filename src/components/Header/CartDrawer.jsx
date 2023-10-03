function CartDrawer({ onClickClose, items = [] }) {
  return (
    <div className="Overley">
      <div className="Drawer">
        <h2 style={{ marginBottom: '30px' }}>
          Корзина{' '}
          <img
            onClick={onClickClose}
            className="CloseBtn"
            src="/SVG/btn-remove.svg"
            alt="CloseBtn"
          />
        </h2>
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
                className="RemoveBtn"
                src="/SVG/btn-remove.svg"
                alt="BtnRemove"
              />
            </div>
          ))}
        </div>

        <div className="items">
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
      </div>
    </div>
  );
}

export default CartDrawer;
