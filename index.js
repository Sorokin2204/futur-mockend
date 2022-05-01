const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
const data = {
  city: [
    {
      id: 1,
      name: 'Атырау',
      slug: 'atyrau',
    },
    {
      id: 2,
      name: 'Нур-Султан',
      slug: 'nur-sultan',
    },
  ],
  'house-type': [
    {
      id: 1,
      name: 'Квартира',
      slug: 'kvartira',
    },
    {
      id: 2,
      name: 'Частный дом',
      slug: 'chastnyj-dom',
    },
  ],

  feedback: [
    {
      name: 'Офыла',
      phone: '+7 (234) 234-23-42',
      writeInSocial: true,
      id: 1,
    },
    {
      name: '23',
      phone: '+7 (423) 444-23-42',
      writeInSocial: true,
      id: 2,
    },
    {
      name: '423432',
      phone: '+7 (423) 432-43-24',
      writeInSocial: false,
      id: 3,
    },
    {
      name: '4324234234',
      phone: '+7 (234) 234-23-43',
      writeInSocial: true,
      id: 4,
    },
    {
      name: '234324',
      phone: '+7 (324) 324-23-43',
      writeInSocial: true,
      id: 5,
    },
    {
      name: '4234',
      phone: '+7 (234) 324-32-43',
      writeInSocial: true,
      id: 6,
    },
  ],
  'package-type': [
    {
      name: 'Стандарт',
      slug: 'standart',
      order: 1,
    },
    {
      name: 'Комфорт',
      slug: 'comfort',
      order: 2,
    },
    {
      name: 'Бизнес',
      slug: 'busines',
      order: 3,
    },
  ],
  package: [
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'comfort',
      name: 'Отбасы',
      slug: 'otobasi',
      price: 50990,
      previewImage: 'https://picsum.photos/seed/1/200/300',
      defaultDetails: [
        {
          label: 'Ламинат',
          value: 'Серия Kastamono, 31 класс, 7мм',
        },
        {
          label: 'Двери',
          value: 'EcoTech, Тренд',
        },
        {
          label: 'Сместители',
          value: 'Росинка, Россия',
        },
      ],
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'standart',
      name: 'Стандарт базовый',
      slug: 'standart-basic',
      price: 50990,
      previewImage: 'https://picsum.photos/seed/2/200/300',
      defaultDetails: [
        {
          label: 'Ламинат',
          value: 'Серия Kastamono, 31 класс, 7мм',
        },
        {
          label: 'Двери',
          value: 'EcoTech, Тренд',
        },
        {
          label: 'Сместители',
          value: 'Росинка, Россия',
        },
      ],
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'busines',
      name: 'Стандарт бизнес',
      slug: 'standart-busines',
      price: 50990,
      previewImage: 'https://picsum.photos/seed/3/1000/800',
      defaultDetails: [
        {
          label: 'Ламинат',
          value: 'Серия Kastamono, 31 класс, 7мм',
        },
        {
          label: 'Двери',
          value: 'EcoTech, Тренд',
        },
        {
          label: 'Сместители',
          value: 'Росинка, Россия',
        },
      ],
    },
  ],
  room: [
    {
      icon: '/icons/room-1.svg',
      name: 'Гостиная',
      slug: 'gostinaya',
      order: 1,
    },
    {
      icon: '/icons/room-2.svg',
      name: 'Спальня',
      slug: 'spalng',
      order: 2,
    },
    {
      icon: '/icons/room-3.svg',
      name: 'Кухня',
      slug: 'kugna',
      order: 3,
    },
    {
      icon: '/icons/room-4.svg',
      name: 'Ванная',
      slug: 'vanna',
      order: 4,
    },
    {
      icon: '/icons/room-5.svg',
      name: 'Санузел',
      slug: 'sanusel',
      order: 5,
    },
    {
      icon: '/icons/room-6.svg',
      name: 'Прихожая',
      slug: 'prihocha',
      order: 6,
    },
    {
      icon: '/icons/room-7.svg',
      name: 'Балкон',
      slug: 'balkon',
      order: 7,
    },
    {
      icon: '/icons/room-8.svg',
      name: 'Гардеробная',
      slug: 'garderob',
      order: 8,
    },
  ],
};

// let rawdata = fs.readFileSync('db.json');
// let student = JSON.parse(rawdata);
// const personsMap = new Map(Object.entries(student));
for (const key of Object.keys(data)) {
  app.get(`/${key}`, (req, res, next) => {
    res.send(data[key]);
  });
  //   console.log(student[key]);
}

const PORT = 8080 || process.env.PORT;

// app.use('/api/product', product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
