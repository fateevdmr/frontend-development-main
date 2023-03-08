import { useCurrentDate } from '@kundinos/react-hooks';

const Footer = () => {
  const year = useCurrentDate().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__info-wrapper">
            <div className="footer__info">
              <div className="footer__company-info">
                © ООО «<span>Мой</span>Маркет», 2018-{year}.
              </div>
              <div>
                Для уточненияинформации звоните по номеру
                <a href="tel:+7 900 000 0000">+7 900 000 0000</a>,
              </div>
              <div>
                а предложения по сотрудничеству отправляйте на почту
                <a href="mailto: partner@mymarket.com">partner@mymarket.com</a>
              </div>
            </div>

            <div className="footer__btn-up">
              <a href="#top">Наверх</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
