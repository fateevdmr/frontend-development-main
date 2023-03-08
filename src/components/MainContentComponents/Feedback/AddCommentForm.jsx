import { useEffect, useState } from 'react';

import { validate } from './utils/feedbackValidate';

const storage = window.localStorage;

const AddCommentForm = () => {
  const [name, setName] = useState(storage.getItem('name'));
  const [raiting, setRaiting] = useState(storage.getItem('raiting'));
  const [text, setText] = useState(storage.getItem('text'));

  const [isPressAddCommentBtn, setIsPressAddCommentButton] = useState(false);

  const [nameValid, setNameValid] = useState(validate('name', name));
  const [raitingValid, setRaitingValid] = useState(validate('raiting', raiting));
  const [textValid, setTextValid] = useState(validate('text', text));

  const changeName = (event) => {
    const value = event.target.value;
    storage.setItem('name', value);
    setName(value);
  };

  const changeRaiting = (event) => {
    const value = event.target.value;
    storage.setItem('raiting', value);
    setRaiting(value);
  };

  const changeText = (event) => {
    const value = event.target.value;
    storage.setItem('text', value);
    setText(value);
  };

  const addComment = () => {
    setNameValid(validate('name', name));
    setRaitingValid(validate('raiting', raiting));
    setTextValid(validate('text', text));
    setIsPressAddCommentButton(true);
  };

  const handleFocus = (type) => {
    switch (type) {
      case 'name':
        if (!nameValid.isValid && isPressAddCommentBtn) {
          setName('');
          storage.setItem('name', '');
          setIsPressAddCommentButton(false);
        }
        break;
      case 'raiting':
        if (!raitingValid.isValid && isPressAddCommentBtn) {
          setRaiting('');
          storage.setItem('raiting', '');
          setIsPressAddCommentButton(false);
        }
        break;
      case 'text':
        if (!textValid.isValid && isPressAddCommentBtn) {
          setText('');
          storage.setItem('text', '');
          setIsPressAddCommentButton(false);
        }
        break;
    }
  };

  useEffect(() => {
    if (isPressAddCommentBtn && nameValid.isValid && raitingValid.isValid && textValid.isValid) {
      storage.setItem('name', '');
      storage.setItem('raiting', '');
      storage.setItem('text', '');

      setName('');
      setRaiting('');
      setText('');
    }
  }, [isPressAddCommentBtn]);

  return (
    <div className="add-comment__wrapper">
      <form id="add-comment-form" className="add-comment">
        <h4 className="add-comment__title">Добавить свой отзыв</h4>
        <div className="add-comment__name-raiting-wrapper">
          <div className="add-comment__person-name">
            <input
              onInput={(e) => changeName(e)}
              onFocus={() => handleFocus('name')}
              value={name}
              className="add-comment__input-style"
              placeholder="Имя и фамилия"
            />
            <div
              className={
                isPressAddCommentBtn
                  ? nameValid.isValid
                    ? 'add-comment__validate hide'
                    : 'add-comment__validate'
                  : 'add-comment__validate hide'
              }>
              {isPressAddCommentBtn && (nameValid && nameValid.isValid ? '' : nameValid.content)}
            </div>
          </div>
          <div className="add-comment__raiting">
            <input
              onInput={(e) => changeRaiting(e)}
              onFocus={() => handleFocus('raiting')}
              value={raiting}
              className="add-comment__input-style"
              placeholder="Оценка"
              type="text"
              max="5"
              min="1"
            />
            <div
              className={
                isPressAddCommentBtn
                  ? raitingValid.isValid
                    ? 'add-comment__validate hide'
                    : 'add-comment__validate'
                  : 'add-comment__validate hide'
              }>
              {isPressAddCommentBtn &&
                (raitingValid && raitingValid.isValid ? '' : raitingValid.content)}
            </div>
          </div>
        </div>
        <div className="add-comment__text-area-wrapper">
          <textarea
            value={text}
            onInput={(e) => changeText(e)}
            onFocus={() => handleFocus('text')}
            className="add-comment__text-area-block add-comment__input-style"
            placeholder="Текст отзыва"></textarea>
          <div
            className={
              isPressAddCommentBtn
                ? textValid.isValid
                  ? 'add-comment__validate hide'
                  : 'add-comment__validate'
                : 'add-comment__validate hide'
            }>
            {isPressAddCommentBtn && (textValid && textValid.isValid ? '' : textValid.content)}
          </div>
        </div>
        <button onClick={addComment} type="button" className="add-comment__submit button-primary">
          Отправить отзыв
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
