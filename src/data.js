const productInfo = {
  name: 'Смартфон Apple iPhone 13',
  selectedColor: 'blue',
  memoryConfiguration: 128,
  options: {
    description: `Наша самая совершенная система двух камер.
                  Особый взгляд на прочность дисплея.
                  Чип, скоторым всё супербыстро.Аккумулятор держится заметно дольше.
                  iPhone 13 - сильный мира всего.

                  Мы разработали совершенно новую схему расположения и развернули объективы на45 градусов. 
                  Благодаря этому внутри корпуса поместилась наша лучшая система двухкамер с увеличенной 
                  матрицей широкоугольной камеры. Кроме того, мы освободилиместо для системы оптической 
                  стабилизации изображения сдвигом матрицы. Иповысили скорость работы матрицы на сверхширокоугольной 
                  камере.

                  Новая сверхширокоугольная камера видит больше деталей в тёмных областяхснимков. Новая 
                  широкоугольная камера улавливает на 47% больше света для болеекачественных фотографий 
                  и видео. Новая оптическая стабилизация со сдвигомматрицы обеспечит чёткие кадры даже 
                  в неустойчивом положении.

                  Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещенияфокуса и изменения 
                  резкости. Просто начните запись видео. Режим «Киноэффект»будет удерживать фокус на объекте съёмки, 
                  создавая красивый эффект размытиявокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести 
                  фокус на другогочеловека или объект, который появился в кадре. Теперь ваши видео будут смотретьсякак 
                  настоящее кино.`,
    price: 67990,
    oldPrice: 75990,
    sale: 8,
    images: [
      './resources/image-1.webp',
      './resources/image-2.webp',
      './resources/image-3.webp',
      './resources/image-4.webp',
      './resources/image-5.webp',
    ],
    allColors: ['red', 'dark-grey', 'gold', 'blue', 'white', 'black'],
    allMemoryConfigurations: [128, 256, 512],
    deliveryVariants: [
      {
        name: 'self-delivery',
        date: '01.09.2022',
        coast: 0,
      },
      {
        name: 'courier',
        date: '01.09.2022',
        coast: 0,
      },
    ],
  },
};

const customerComment_1 = {
  authorName: 'Марк Г.',
  fotoUrl: 'http://www.image.com/image_1.jpg',
  commentRating: 4,
  content: {
    usingExperience: 21,
    advantages: `это мой первый айфон после после огромного количества телефонов на андроиде. 
                всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик 
                тоже на высоте.`,
    faults: `к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь) а 
            если нужно переносить фото с компа, то это только через itunes, которыйурезает качество 
            фотографий исходное`,
  },
};

const customerComment_2 = {
  authorName: 'Марк Г.',
  fotoUrl: 'http://www.image.com/image_2.jpg',
  commentRating: 5,
  content: {
    usingExperience: 15,
    advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    faults: `Плохая ремонтопригодность`,
  },
};
