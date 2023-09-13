import Sneakers1 from '../../assets/img/sneakers/1.jpg';
import Sneakers2 from '../../assets/img/sneakers/2.jpg';

function CartDrawer() {
  return (
    <div /* */ style={{ display: 'none' }} className="Overley">
      <div className="Drawer">
        <h2 style={{ marginBottom: '30px' }}>
          Корзина{' '}
          <img
            className="RemoveBtn"
            src="/SVG/btn-remove.svg"
            alt="BtnRemove"
          />
        </h2>
        <div className="cartItemContainer">
          <div className="CartItem">
            <div
              style={{ backgroundImage: `url(${Sneakers1})` }}
              className="CardItemImg"
            ></div>
            <div className="CartInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="RemoveBtn"
              src="/SVG/btn-remove.svg"
              alt="BtnRemove"
            />
          </div>

          <div className="CartItem">
            <div
              style={{ backgroundImage: `url(${Sneakers2})` }}
              className="CardItemImg"
            ></div>
            <div className="CartInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="RemoveBtn"
              src="/SVG/btn-remove.svg"
              alt="BtnRemove"
            />
          </div>

          <div className="CartItem">
            <div
              style={{ backgroundImage: `url(${Sneakers1})` }}
              className="CardItemImg"
            ></div>
            <div className="CartInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="RemoveBtn"
              src="/SVG/btn-remove.svg"
              alt="BtnRemove"
            />
          </div>
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
