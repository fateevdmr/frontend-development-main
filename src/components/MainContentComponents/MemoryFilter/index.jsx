import { useState } from 'react';

import SelectButton from './SelectButton';

const btnsData = [
  { id: '1', memorySize: '128' },
  { id: '2', memorySize: '256' },
  { id: '3', memorySize: '512' },
  { id: '4', memorySize: '1024' },
];

const MemoryFilter = () => {
  const [selectMemory, setSelectMemory] = useState('0');

  const changeMemory = (id) => {
    setSelectMemory(id);
  };

  return (
    <div className="filter__memory">
      <h3 className="filter__title">Конфигурация памяти: 128ГБ</h3>
      <div className="filter__select">
        {btnsData &&
          btnsData.map((btn) => {
            return (
              <SelectButton
                key={btn.id}
                id={btn.id}
                selected={selectMemory === btn.id}
                memorySize={btn.memorySize}
                changeMemory={changeMemory}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MemoryFilter;
