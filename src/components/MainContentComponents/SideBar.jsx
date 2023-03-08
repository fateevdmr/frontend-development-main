import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, CLEAR_CART } from '../../redux/cartSlice';
import { ADD_TO_FAVORITE, CLEAR_FAVORITE } from '../../redux/favoriteSlice';

const storage = window.localStorage;

const SideBar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartItemsCount);
  const favoriteCount = useSelector((store) => store.favorite.favoriteCount);

  const addToCart = async () => {
    if (cartCount === 0) {
      dispatch(ADD_TO_CART());
    } else {
      dispatch(CLEAR_CART());
    }
  };

  const addToFavorite = () => {
    if (favoriteCount === 0) {
      dispatch(ADD_TO_FAVORITE());
    } else {
      dispatch(CLEAR_FAVORITE());
    }
  };

  useEffect(() => {
    storage.setItem('cartCount', cartCount);
  }, [cartCount]);

  useEffect(() => {
    storage.setItem('favoriteCount', favoriteCount);
  }, [favoriteCount]);

  return (
    <div className="price-banners__wrapper">
      <div className="phone-price">
        <div>
          <div className="phone-price__old">
            <div className="phone-price__price-wrapper">
              <span className="phone-price__old-price">75 990₽</span>
              <span className="phone-price__discount">-8%</span>
            </div>
            <div onClick={addToFavorite} className="phone-price__favorite">
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                  fill={favoriteCount > 0 ? 'red' : '#888888'}
                />
              </svg>
            </div>
          </div>
          <div className="phone-price__new">
            <span className="phone-price__new-price">67 990₽</span>
          </div>
          <div>
            <div className="phone-price__delivery-info">
              Самовывоз в четверг, 1 сентября — <span>бесплатно</span>
            </div>
            <div className="phone-price__delivery-info">
              Курьером в четверг, 1 сентября — <span>бесплатно</span>
            </div>
          </div>
          <button
            onClick={addToCart}
            className={
              cartCount > 0
                ? 'phone-price__added-cart button-primary-added'
                : 'phone-price__add-cart button-primary'
            }>
            {cartCount > 0 ? 'Убрать из корзины' : 'Добавить в корзину'}
          </button>
        </div>
      </div>

      <div className="banner-frame">
        <div className="banner-frame__title">Реклама</div>
        <iframe
          className="banner-frame__iframe"
          src="./banner.html"
          width="330"
          height="100"
          align=""></iframe>
        <iframe
          className="banner-frame__iframe"
          src="./banner.html"
          width="330"
          height="100"
          align=""></iframe>
      </div>
    </div>
  );
};

export default SideBar;
