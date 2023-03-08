let actionsCount = 0;

const logger = (store) => (next) => (action) => {
  const count = (actionsCount += 1);
  console.log('Количество обработанных действий: ', count);

  const res = next(action);

  return res;
};

export default logger;
