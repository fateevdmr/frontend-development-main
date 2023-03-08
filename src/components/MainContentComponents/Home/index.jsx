import { Link } from 'react-router-dom';

import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          Здесь должно быть содержимое главной страницы. Но в рамках курса главная страница
          используется лишь в демонстрационных целях
        </div>
        <Link to="/product">Перейти на страницу товара</Link>
      </div>
    </>
  );
};

export default Home;
