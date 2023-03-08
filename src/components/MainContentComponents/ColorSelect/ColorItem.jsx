const ColorItem = ({ selected, src, id, selectColor }) => {
  return (
    <div
      onClick={() => selectColor(id)}
      className={selected ? 'filter__colors-img radio-select' : 'filter__colors-img'}>
      <img src={src} alt="" width="" height="60" />
    </div>
  );
};

export default ColorItem;
