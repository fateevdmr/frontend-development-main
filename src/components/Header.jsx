import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
  const cartCounts = useSelector((state) => state.cart.cartItemsCount);
  const favoriteCount = useSelector((store) => store.favorite.favoriteCount);

  return (
    <>
      <div className="header__wrapper">
        <header className="header">
          <div className="header__title-wrapper">
            <Link style={{ color: 'black' }} to="/">
              <img
                className="header__favicon"
                src="./assets/favicon.svg"
                width="36.5"
                height="31"
              />
              <h1 className="header__title">
                <span>Мой</span>Маркет
              </h1>
            </Link>
          </div>
          <div className="header__cart-favorite-wrapper">
            <div className="header__icon-wrapper">
              {favoriteCount > 0 ? <div className="header__icon-counter">{favoriteCount}</div> : ''}
              <svg
                className="header__icon"
                width="43"
                height="35"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                  fill="#888888"
                />
              </svg>
            </div>

            <div className="header__icon-wrapper">
              {cartCounts > 0 ? <div className="header__icon-counter">{cartCounts}</div> : ''}
              <svg
                className="header__icon"
                width="41"
                height="39"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.299683 0.839233H3.80233H4.62213L4.78291 1.61096L5.24024 3.80618H18.8431H20.0235L19.8295 4.924L18.7993 10.8579L18.66 11.66H17.8129H6.87647L7.30062 13.696H17.8129V15.616H6.48081H5.66101L5.50023 14.8443L3.43985 4.95445L4.42044 4.76618L3.43985 4.95445L2.98252 2.75923H0.299683V0.839233ZM5.64024 5.72618L6.47647 9.74005H16.9658L17.6626 5.72618H5.64024ZM9.1758 18.0054C9.1758 18.8889 8.4316 19.6034 7.51119 19.6034C6.59075 19.6034 5.84656 18.8889 5.84656 18.0054C5.84656 17.1218 6.59075 16.4261 7.51119 16.4261C8.4316 16.4261 9.1758 17.1218 9.1758 18.0054ZM15.7534 19.6034C16.6738 19.6034 17.418 18.8889 17.418 18.0054C17.418 17.1218 16.6738 16.4261 15.7534 16.4261C14.8329 16.4261 14.0887 17.1218 14.0887 18.0054C14.0887 18.8889 14.8329 19.6034 15.7534 19.6034Z"
                  fill="#888888"
                />
              </svg>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
