import React from 'react';

import ColorItem from './ColorItem';

const colorsData = [
  { src: './assets/phone-colors/color-1.webp', id: '1' },
  { src: './assets/phone-colors/color-2.webp', id: '2' },
  { src: './assets/phone-colors/color-3.webp', id: '3' },
  { src: './assets/phone-colors/color-4.webp', id: '4' },
  { src: './assets/phone-colors/color-5.webp', id: '5' },
  { src: './assets/phone-colors/color-6.webp', id: '6' },
];

const ColorSelect = () => {
  const [currentSelect, setCurrentSelect] = React.useState('0');

  const selectColor = (id) => {
    setCurrentSelect(id);
  };

  return (
    <div className="filter">
      <div className="filter__select-color">
        <b>Цвет товара: Синий</b>
        <div className="filter__colors-photos">
          {colorsData &&
            colorsData.map((color) => {
              return (
                <ColorItem
                  key={color.id}
                  id={color.id}
                  selected={currentSelect === color.id}
                  src={color.src}
                  selectColor={selectColor}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ColorSelect;
