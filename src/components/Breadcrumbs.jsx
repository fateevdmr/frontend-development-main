import styled from 'styled-components';

const Breadcrumbs = () => {
  const Navigation = styled.nav`
    font-size: 16px;
    line-height: 19px;
  `;

  const BredcrumbsLink = styled.a`
    text-decoration: none;
  `;

  return (
    <>
      <Navigation>
        <BredcrumbsLink href="">Электроника </BredcrumbsLink>
        <span>{'>'}</span>
        <BredcrumbsLink href="">Смартфоны и гаджеты </BredcrumbsLink>
        <span>{'>'}</span>
        <BredcrumbsLink href="">Мобильные телефоны </BredcrumbsLink>
        <span>{'>'}</span>
        <BredcrumbsLink href="">Apple</BredcrumbsLink>
      </Navigation>
    </>
  );
};

export default Breadcrumbs;
