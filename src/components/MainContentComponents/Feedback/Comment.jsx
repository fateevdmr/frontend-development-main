const Comment = ({
  avatarImg,
  customerName,
  raitingImg,
  experience,
  advantages,
  gaps,
  index,
  data,
}) => {
  return (
    <>
      <div className="feedback__item">
        <div className="feedback__avatar">
          <img src={avatarImg} alt="" width="200" height="200" />
        </div>
        <div>
          <div className="feedback__person-name">{customerName}</div>

          <div className="feedback__raiting">
            <img src={raitingImg} alt="" width="auto" height="30" />
          </div>

          <div>
            <div className="feedback__text-title">
              Опыт использования: <span>{experience}</span>
            </div>
            <div>
              <div className="feedback__text-title">Достоинства:</div>
              {advantages}
            </div>
            <div>
              <div className="feedback__text-title">Недостатки:</div>
              {gaps}
            </div>
          </div>
        </div>
      </div>

      {index === data.length - 1 ? '' : <div className="feedback__line"></div>}
    </>
  );
};

export default Comment;
