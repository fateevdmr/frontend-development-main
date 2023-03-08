const ProductFeatures = () => {
  return (
    <section>
      <h3>Характеристики товара</h3>
      <ul>
        <li className="filter__colors-select">Экран: 6.1</li>
        <li>Встроенная память: 128 ГБ</li>
        <li>Операционная система: iOS 15</li>
        <li>Беспроводные интерфейсы: NFC, Bluetooth, Wi-Fi</li>
        <li>
          Процессор:
          <a href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank">
            Apple A15 Bionic
          </a>
        </li>
        <li>Вес: 173 г</li>
      </ul>
    </section>
  );
};

export default ProductFeatures;
