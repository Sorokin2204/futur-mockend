const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));
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
    {
      name: '234',
      phone: '+7 (234) 234-23-43',
      writeInSocial: true,
      id: 7,
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
  'package-list': [
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'comfort',
      name: 'Отбасы',
      slug: 'otobasi',
      price: 50990,
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'standart',
      name: 'Стандарт базовый',
      slug: 'standart-basic',
      price: 50990,
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      category: 'busines',
      name: 'Стандарт бизнес',
      slug: 'standart-busines',
      price: 50990,
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
  'room-single': [
    {
      id: '6269427c8ddae9e2e9922b4b',
      name: 'Гостинная',
      tariff: 'standart-basic',
      slug: 'gostinaya',
      imgWithFurnitureOnAngles: [
        {
          img: '/img/constructor/mebel-1.png',
          priority: 4,
          orderAngle: 1,
        },
        {
          img: '/img/constructor/mebel-2.png',
          priority: 4,
          orderAngle: 2,
        },
      ],
      details: [
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Пол',
          slug: 'pol',
          positionOnAngles: [
            {
              x: 39,
              y: 85,
              orderAngle: 1,
            },
            {
              x: 44,
              y: 75,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Розетки',
              slug: 'rosetki',
              previewImg: '/img/constructor/rosetka-1-prev.jpeg',
              desc: 'Розетки Boshe',
              price: 2000,
              order: 1,
              optional: true,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Дополнительные опции',
                slug: 'roset',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/rosetki-1-r1.png',
                  priority: 4,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/rosetki-1-r2.png',
                  priority: 4,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Дуб шервуд белый 4V',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              previewImg: '/img/constructor/pol-1-prev.png',
              desc: 'Ламинат Tarkett, Коллекция WoodStock, Цвет Дуб шервуд белый 4V, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/pol-1-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/pol-1-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Эсмеральда',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskoj',
              previewImg: '/img/constructor/pol-2-prev.jpg',
              desc: 'Ламинат Tarkett, Коллекция Ballet, Цвет Эсмеральда, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/pol-2-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/pol-2-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Потолок',
          slug: 'potolok',
          positionOnAngles: [
            {
              x: 56,
              y: 3,
              orderAngle: 1,
            },
            {
              x: 54,
              y: 1,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Двухуровневый потолок из ГКЛ с черной нишей',
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              previewImg: '/img/constructor/potolok-1-prev.png',
              desc: 'Двухуровневый потолок из ГКЛ с черной нишей для спот - Гостиная',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Двухуровневый потолок',
                slug: 'dvuhurovnevyj-potolok',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/potolok-1-r1.png',
                  priority: 1,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/potolok-1-r2.png',
                  priority: 1,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Двухуровневый потолок из ГКЛ с белой нишей',
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-beloj-nishej',
              previewImg: '/img/constructor/potolok-2-prev.png',
              desc: 'Двухуровневый потолок из ГКЛ с белой нишей для спот - Гостиная',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Двухуровневый потолок',
                slug: 'dvuhurovnevyj-potolok',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/potolok-2-r1.png',
                  priority: 1,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/potolok-2-r2.png',
                  priority: 1,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Стена',
          slug: 'stena',
          positionOnAngles: [
            {
              x: 34,
              y: 37,
              orderAngle: 1,
            },
            {
              x: 73,
              y: 33,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Columbia',
              slug: 'kraska-ceresit-columbia',
              previewImg: '/img/constructor/stena-1-prev.jpg',
              desc: 'Краска Ceresit, Columbia, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/stena-1-r1.png',
                  imgWithFurniture: '/img/stena/stena-1-r1-m.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/stena-1-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor/stena-1-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Derufa',
              slug: 'kraska-ceresit-derufa',
              previewImg: '/img/constructor/stena-2-prev.jpg',
              desc: 'Краска Ceresit, Derufa, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor/stena-2-r1.png',
                  priority: 2,
                  imgWithFurniture: '/img/stena/stena-2-r1-m.png',
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor/stena-2-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor/stena-2-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      name: 'Кухня',
      tariff: 'standart-basic',
      slug: 'kugna',
      imgWithFurnitureOnAngles: [
        {
          img: '/img/constructor-kitchen/mebel-1.png',
          priority: 4,
          orderAngle: 1,
        },
      ],
      details: [
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Пол',
          slug: 'pol',
          positionOnAngles: [
            {
              x: 39,
              y: 85,
              orderAngle: 1,
            },
            {
              x: 44,
              y: 75,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Розетки',
              slug: 'rosetki',
              previewImg: '/img/constructor-kitchen/rosetka-1-prev.jpeg',
              desc: 'Розетки Boshe',
              price: 2000,
              order: 1,
              optional: true,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Дополнительные опции',
                slug: 'roset',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/rosetki-1-r1.png',
                  priority: 4,
                  orderAngle: 1,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Дуб шервуд белый 4V',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              previewImg: '/img/constructor-kitchen/pol-1-prev.png',
              desc: 'Ламинат Tarkett, Коллекция WoodStock, Цвет Дуб шервуд белый 4V, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/pol-1-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen/pol-1-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Эсмеральда',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskoj',
              previewImg: '/img/constructor-kitchen/pol-2-prev.jpg',
              desc: 'Ламинат Tarkett, Коллекция Ballet, Цвет Эсмеральда, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/pol-2-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen/pol-2-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Потолок',
          slug: 'potolok',
          positionOnAngles: [
            {
              x: 56,
              y: 3,
              orderAngle: 1,
            },
            {
              x: 54,
              y: 1,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Двухуровневый потолок из ГКЛ с черной нишей',
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              previewImg: '/img/constructor-kitchen/potolok-1-prev.png',
              desc: 'Двухуровневый потолок из ГКЛ с черной нишей для спот - Гостиная',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Двухуровневый потолок',
                slug: 'dvuhurovnevyj-potolok',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/potolok-1-r1.png',
                  priority: 1,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen/potolok-1-r2.png',
                  priority: 1,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Стена',
          slug: 'stena',
          positionOnAngles: [
            {
              x: 34,
              y: 37,
              orderAngle: 1,
            },
            {
              x: 73,
              y: 33,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Columbia',
              slug: 'kraska-ceresit-columbia',
              previewImg: '/img/constructor-kitchen/stena-1-prev.jpg',
              desc: 'Краска Ceresit, Columbia, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/stena-1-r1.png',
                  imgWithFurniture: '/img/stena/stena-1-r1-m.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen/stena-1-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-kitchen/stena-1-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Derufa',
              slug: 'kraska-ceresit-derufa',
              previewImg: '/img/constructor-kitchen/stena-2-prev.jpg',
              desc: 'Краска Ceresit, Derufa, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen/stena-2-r1.png',
                  priority: 2,
                  imgWithFurniture: '/img/stena/stena-2-r1-m.png',
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen/stena-2-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-kitchen/stena-2-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      name: 'Кухня',
      tariff: 'otobasi',
      slug: 'kugna',
      imgWithFurnitureOnAngles: [
        {
          img: '/img/constructor-kitchen-prime/mebel-1.png',
          priority: 4,
          orderAngle: 1,
        },
      ],
      details: [
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Пол',
          slug: 'pol',
          positionOnAngles: [
            {
              x: 39,
              y: 85,
              orderAngle: 1,
            },
            {
              x: 44,
              y: 75,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Розетки',
              slug: 'rosetki',
              previewImg: '/img/constructor-kitchen-prime/rosetka-1-prev.jpeg',
              desc: 'Розетки Boshe',
              price: 2000,
              order: 1,
              optional: true,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Дополнительные опции',
                slug: 'roset',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/rosetki-1-r1.png',
                  priority: 4,
                  orderAngle: 1,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Дуб шервуд белый 4V',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              previewImg: '/img/constructor-kitchen-prime/pol-1-prev.png',
              desc: 'Ламинат Tarkett, Коллекция WoodStock, Цвет Дуб шервуд белый 4V, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/pol-1-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen-prime/pol-1-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Эсмеральда',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskoj',
              previewImg: '/img/constructor-kitchen-prime/pol-2-prev.jpg',
              desc: 'Ламинат Tarkett, Коллекция Ballet, Цвет Эсмеральда, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/pol-2-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen-prime/pol-2-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Потолок',
          slug: 'potolok',
          positionOnAngles: [
            {
              x: 56,
              y: 3,
              orderAngle: 1,
            },
            {
              x: 54,
              y: 1,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Двухуровневый потолок из ГКЛ с черной нишей',
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              previewImg: '/img/constructor-kitchen-prime/potolok-1-prev.png',
              desc: 'Двухуровневый потолок из ГКЛ с черной нишей для спот - Гостиная',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Двухуровневый потолок',
                slug: 'dvuhurovnevyj-potolok',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/potolok-1-r1.png',
                  priority: 1,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen-prime/potolok-1-r2.png',
                  priority: 1,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Стена',
          slug: 'stena',
          positionOnAngles: [
            {
              x: 34,
              y: 37,
              orderAngle: 1,
            },
            {
              x: 73,
              y: 33,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Columbia',
              slug: 'kraska-ceresit-columbia',
              previewImg: '/img/constructor-kitchen-prime/stena-1-prev.jpg',
              desc: 'Краска Ceresit, Columbia, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/stena-1-r1.png',
                  imgWithFurniture: '/img/stena/stena-1-r1-m.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen-prime/stena-1-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-kitchen-prime/stena-1-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Derufa',
              slug: 'kraska-ceresit-derufa',
              previewImg: '/img/constructor-kitchen-prime/stena-2-prev.jpg',
              desc: 'Краска Ceresit, Derufa, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-kitchen-prime/stena-2-r1.png',
                  priority: 2,
                  imgWithFurniture: '/img/stena/stena-2-r1-m.png',
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-kitchen-prime/stena-2-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-kitchen-prime/stena-2-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '6269427c8ddae9e2e9922b4b',
      name: 'Гостинная',
      tariff: 'otobasi',
      slug: 'gostinaya',
      imgWithFurnitureOnAngles: [
        {
          img: '/img/constructor-prime/mebel-1.png',
          priority: 4,
          orderAngle: 1,
        },
        {
          img: '/img/constructor-prime/mebel-2.png',
          priority: 4,
          orderAngle: 2,
        },
      ],
      details: [
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Пол',
          slug: 'pol',
          positionOnAngles: [
            {
              x: 39,
              y: 85,
              orderAngle: 1,
            },
            {
              x: 44,
              y: 89,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Дуб шервуд белый 4V',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              previewImg: '/img/constructor-prime/pol-1-prev.png',
              desc: 'Ламинат Tarkett, Коллекция WoodStock, Цвет Дуб шервуд белый 4V, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/pol-1-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-prime/pol-1-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Ламинат Tarkett, Цвет Эсмеральда',
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskoj',
              previewImg: '/img/constructor-prime/pol-2-prev.jpg',
              desc: 'Ламинат Tarkett, Коллекция Ballet, Цвет Эсмеральда, 33 класс 8 мм, с фаской',
              price: 10000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Ламинат',
                slug: 'laminat',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/pol-2-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-prime/pol-2-r2.png',
                  priority: 2,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Потолок',
          slug: 'potolok',
          positionOnAngles: [
            {
              x: 56,
              y: 4,
              orderAngle: 1,
            },
            {
              x: 54,
              y: 4,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Двухуровневый потолок из ГКЛ с белой нишей',
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-beloj-nishej',
              previewImg: '/img/constructor-prime/potolok-2-prev.png',
              desc: 'Двухуровневый потолок из ГКЛ с белой нишей для спот - Гостиная',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Двухуровневый потолок',
                slug: 'dvuhurovnevyj-potolok',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/potolok-1-r1.jpg',
                  priority: 1,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-prime/potolok-1-r2.jpg',
                  priority: 1,
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Стена',
          slug: 'stena',
          positionOnAngles: [
            {
              x: 17,
              y: 37,
              orderAngle: 1,
            },
            {
              x: 3,
              y: 43,
              orderAngle: 2,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Columbia',
              slug: 'kraska-ceresit-columbia',
              previewImg: '/img/constructor-prime/stena-1-prev.jpg',
              desc: 'Краска Ceresit, Columbia, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/stena-1-r1.png',
                  imgWithFurniture: '/img/stena/stena-1-r1-m.png',
                  priority: 2,
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-prime/stena-1-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-prime/stena-1-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Краска Ceresit, Derufa',
              slug: 'kraska-ceresit-derufa',
              previewImg: '/img/constructor-prime/stena-2-prev.jpg',
              desc: 'Краска Ceresit, Derufa, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Поклейка обоев с покраской',
                slug: 'poklejka-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/stena-2-r1.png',
                  priority: 2,
                  imgWithFurniture: '/img/stena/stena-2-r1-m.png',
                  orderAngle: 1,
                },
                {
                  img: '/img/constructor-prime/stena-2-r2.png',
                  priority: 2,
                  imgWithFurniture: '/img/constructor-prime/stena-2-r2-m.png',
                  orderAngle: 2,
                },
              ],
            },
          ],
        },
        {
          id: '6269427c8ddae9e2e9922b4b',
          name: 'Дверь',
          slug: 'door',
          positionOnAngles: [
            {
              x: 80,
              y: 40,
              orderAngle: 1,
            },
          ],
          options: [
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Дверь белая',
              slug: 'kraska-fdf-columbia',
              previewImg: '/img/constructor-prime/door-1-prev.jpg',
              desc: 'Краска Ceresit, Columbia, код CL2, флизелиновые обои',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Дверь',
                slug: 'ава-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/door-1-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
              ],
            },
            {
              id: '6269427c8ddae9e2e9922b4b',
              name: 'Дверь с окном',
              slug: 'kraska-авfdf-columbia',
              previewImg: '/img/constructor-prime/door-2-prev.jpg',
              desc: 'Дверь в которую врезано окно',
              price: 12000,
              order: 1,
              group: {
                id: '6269427c8ddae9e2e9922b4b',
                name: 'Дверь',
                slug: 'ава-oboev-s-pokraskoj',
                order: 1,
              },
              fullImgOnAngels: [
                {
                  img: '/img/constructor-prime/door-2-r1.png',
                  priority: 2,
                  orderAngle: 1,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  'room-default-options': [
    {
      tariff: 'standart-basic',
      slug: 'gostinaya',
      details: [
        {
          slug: 'pol',
          options: [
            {
              slug: 'rosetki',
              price: 2000,
              group: {
                slug: 'roset',
              },
            },
            {
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              price: 10000,
              group: {
                slug: 'laminat',
              },
            },
          ],
        },
        {
          slug: 'potolok',
          options: [
            {
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              price: 12000,
              group: {
                slug: 'dvuhurovnevyj-potolok',
              },
            },
          ],
        },
        {
          slug: 'stena',
          options: [
            {
              slug: 'kraska-ceresit-columbia',
              price: 12000,
              group: {
                slug: 'poklejka-oboev-s-pokraskoj',
              },
            },
          ],
        },
      ],
    },
    {
      tariff: 'standart-basic',
      slug: 'kugna',
      details: [
        {
          slug: 'pol',
          options: [
            {
              slug: 'rosetki',
              price: 2000,
              group: {
                slug: 'roset',
              },
            },
            {
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              price: 10000,
              group: {
                slug: 'laminat',
              },
            },
          ],
        },
        {
          slug: 'potolok',
          options: [
            {
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              price: 12000,
              group: {
                slug: 'dvuhurovnevyj-potolok',
              },
            },
          ],
        },
        {
          slug: 'stena',
          options: [
            {
              slug: 'kraska-ceresit-columbia',
              price: 12000,
              group: {
                slug: 'poklejka-oboev-s-pokraskoj',
              },
            },
          ],
        },
      ],
    },
    {
      tariff: 'otobasi',
      slug: 'kugna',
      details: [
        {
          slug: 'pol',
          options: [
            {
              slug: 'rosetki',
              price: 2000,
              group: {
                slug: 'roset',
              },
            },
            {
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              price: 10000,
              group: {
                slug: 'laminat',
              },
            },
          ],
        },
        {
          slug: 'potolok',
          options: [
            {
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-chernoj-nishej',
              price: 12000,
              group: {
                slug: 'dvuhurovnevyj-potolok',
              },
            },
          ],
        },
        {
          slug: 'stena',
          options: [
            {
              slug: 'kraska-ceresit-columbia',
              price: 12000,
              group: {
                slug: 'poklejka-oboev-s-pokraskoj',
              },
            },
          ],
        },
      ],
    },
    {
      tariff: 'otobasi',
      slug: 'gostinaya',
      details: [
        {
          slug: 'pol',
          options: [
            {
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskojrrr',
              price: 10000,
              group: {
                slug: 'laminat',
              },
            },
            {
              slug: 'laminat-tarkett-kollekciya-woodstock-cvet-dub-shervud-belyj-4v-33-klass-8-mm-s-faskoj',
              price: 10000,
              group: {
                slug: 'laminat',
              },
            },
          ],
        },
        {
          slug: 'potolok',
          options: [
            {
              slug: 'dvuhurovnevyj-potolok-iz-gkl-s-beloj-nishej',
              price: 12000,
              group: {
                slug: 'dvuhurovnevyj-potolok',
              },
            },
          ],
        },
        {
          slug: 'stena',
          options: [
            {
              slug: 'kraska-ceresit-columbia',
              price: 12000,
              group: {
                slug: 'poklejka-oboev-s-pokraskoj',
              },
            },
          ],
        },
        {
          slug: 'door',
          options: [
            {
              slug: 'kraska-fdf-columbia',
              price: 12000,
              group: {
                slug: 'ава-oboev-s-pokraskoj',
              },
            },
          ],
        },
      ],
    },
  ],
  'total-feedback': [],
};

// let rawdata = fs.readFileSync('db.json');
// let student = JSON.parse(rawdata);
// const personsMap = new Map(Object.entries(student));
const corsWhitelist = ['', 'https://futur.vercel.app'];
for (const key of Object.keys(data)) {
  app.get(`/${key}`, (req, res, next) => {
    let newData = [...data[key]];
    if (Object.keys(req.query).length !== 0) {
      for (let keyQuery of Object.keys(req.query)) {
        if (Array.isArray(req.query[keyQuery])) {
          newData = newData.filter((item) => req.query[keyQuery].includes(item[keyQuery]));
        } else {
          newData = newData.filter((item) => req.query[keyQuery] == item[keyQuery]);
        }
      }
    }

    res.send(newData);
  });
  app.post(`/${key}`, (req, res, next) => {
    data[key].push(req.body);
    res.send('Success');
  });
}

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
