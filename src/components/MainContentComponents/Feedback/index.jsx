import React from 'react';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment';

const commentsData = [
  {
    id: '1',
    avatarImg: './assets/avatars/review-1.jpeg',
    customerName: 'Марк Г.',
    raitingImg: './assets/star-4.png',
    experience: 'менее месяца',
    advantages: `это мой первый айфон после после огромного количества телефонов на андроиде.
                всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма
                неплохая,ширик тоже на высоте.`,
    gaps: `к самому устройству мало
          имеет отношение, но перенос данных с андроида - адскаявещь) а если нужно переносить
          фото с компа, то это только через itunes, которыйурезает качество фотографий
          исходное`,
  },
  {
    id: '2',
    avatarImg: './assets/avatars/review-2.jpeg',
    customerName: 'Николай Е.',
    raitingImg: './assets/star-5.png',
    experience: '2 месяца',
    advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    gaps: `Плохая ремонтопригодность`,
  },
];

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="feedback__header-wrapper">
        <div className="feedback__title-wrapper">
          <h3 className="feedback__title">Отзывы</h3>
          <div className="feedback__count">425</div>
        </div>
      </div>
      <div>
        {commentsData &&
          commentsData.map((comment, index) => {
            return (
              <Comment
                key={comment.id}
                avatarImg={comment.avatarImg}
                customerName={comment.customerName}
                raitingImg={comment.raitingImg}
                experience={comment.experience}
                advantages={comment.advantages}
                gaps={comment.gaps}
                index={index}
                data={commentsData}
              />
            );
          })}
      </div>

      <AddCommentForm />
    </section>
  );
};

export default Feedback;
