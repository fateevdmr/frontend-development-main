export function validate(type, value) {
  switch (type) {
    case 'name':
      if (value === '') {
        return { content: 'Вы забыли указать имя и фамилию', isValid: false };
      } else if (value?.length <= 2) {
        return { content: 'Имя не может быть короче 2-хсимволов', isValid: false };
      } else {
        return { content: value, isValid: true };
      }
    case 'raiting':
      if (value === '') {
        return { content: 'поле не заполнено: Оценка должна быть от 1 до 5', isValid: false };
      } else if (isNaN(Number(value))) {
        return { content: 'в поле введены буквы: Оценка должна быть от 1 до 5', isValid: false };
      } else if (Number(value) < 1 || Number(value) > 5) {
        return {
          content: 'ввели цифры больше 5 или меньше 1: Оценка должна быть от 1 до 5',
          isValid: false,
        };
      } else {
        return { content: value, isValid: true };
      }
    case 'text':
      if (value === '') {
        return { content: 'Введите хоть какой то техт...', isValid: false };
      } else return { content: value, isValid: true };
  }
}
