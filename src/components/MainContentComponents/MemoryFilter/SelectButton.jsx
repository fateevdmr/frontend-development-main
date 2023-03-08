const SelectButton = ({ selected, memorySize, id, changeMemory }) => {
  return (
    <button
      onClick={() => changeMemory(id)}
      className={selected ? 'filter__memory-item radio-select' : 'filter__memory-item'}>
      {memorySize}ГБ
    </button>
  );
};

export default SelectButton;
