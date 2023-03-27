import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import LogoText from '../../assets/logo_text.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      
        <div className={style.box}>
          <div className={style.logoImage}>
            <img src='https://www.kv.by/sites/default/files/styles/post_picture/public/pictures/userpictures/2019/08/27/2359/82615790.jpg?itok=lxhDUvM2'width={100}  alt='/' />
            
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##'>Мой блог</a>
            </li>
            <li>
              <a href='##'>Рассказываем</a>
            </li>
            <li>
              <a href='##'>Советуем</a>
            </li>
            <li>
              <a href='##'>Афиша</a>
            </li>
            <li>
              <a href='##'>Вход/Регистрация </a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobileBtn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      
    </header>
  );
};

export default NAvbar;
