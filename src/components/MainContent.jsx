import SideBar from './MainContentComponents/SideBar';
import ColorSelect from './MainContentComponents/ColorSelect';
import Description from './MainContentComponents/Description';
import Feedback from './MainContentComponents/Feedback';
import MemoryFilter from './MainContentComponents/MemoryFilter';
import ProductFeatures from './MainContentComponents/ProductFeatures';
import ProductPhotos from './MainContentComponents/ProductPhotos';

const MainContent = () => {
  return (
    <>
      <main className="main">
        <div className="phone-name__wrapper">
          <h2 className="phone-name">Смартфон Apple iPhone 13</h2>
        </div>
        <ProductPhotos />

        <div className="main__phone-intro-and-price-wrapper">
          <div className="phone-intro__wrapper">
            <ColorSelect />
            <MemoryFilter />
            <ProductFeatures />
            <Description />
            <Feedback />
          </div>
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default MainContent;
