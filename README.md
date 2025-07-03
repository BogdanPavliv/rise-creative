# Rise Creative

**Rise Creative** — це сучасний лендинг або портфоліо-сайт, розроблений на базі [React 19](https://react.dev/), з використанням [TypeScript](https://www.typescriptlang.org/) і високопродуктивного білдера [Vite](https://vitejs.dev/). Проєкт побудований з фокусом на анімації, smooth scroll, адаптивність та інтерактивність.

## ⚙️ Технологічний стек

- **React 19** + **TypeScript**
- **Redux Toolkit**
- **Vite 7** — ультрашвидкий дев-сервер і білдер
- **SASS** для організації стилів
- **PostCSS + Autoprefixer** для оптимізації CSS
- **ESLint + TypeScript ESLint** — суворий контроль якості коду

## 🎯 Основні особливості

- **Smooth Scroll** з [react-scroll](https://www.npmjs.com/package/react-scroll)
- **Анімації** з [Framer Motion](https://www.framer.com/motion/)
- **Redux Toolkit** для централізованого керування станом
- **Слайдери** через [React Slick](https://react-slick.neostack.com/) і [Swiper](https://swiperjs.com/)
- **Модальні вікна** з [FSLightbox](https://fslightbox.com/)
- **Лічильники** з [React CountUp](https://www.npmjs.com/package/react-countup)
- **CSS нормалізація** через `normalize.css`
- **SASS + PostCSS + Autoprefixer** для кросбраузерної стилізації

## 📦 Встановлення

bash
git clone https://github.com/BogdanPavliv/rise-creative.git
cd rise-creative
npm install
npm run dev

## 🚀 Команди

| Скрипт       | Опис                                                                 |
|--------------|----------------------------------------------------------------------|
| `npm run dev`     | Запуск локального дев-серверу Vite                                   |
| `npm run build`   | Компільовування TypeScript і білд продакшен-версії                 |
| `npm run preview` | Перегляд продакшен-збірки локально                                 |
| `npm run lint`    | Аналіз коду ESLint з суворими правилами та перевіркою unused директив |

## ✅ Якість коду

Проєкт налаштований з використанням:
- **ESLint** з плагінами `@typescript-eslint`, `react-hooks`, `react-refresh`
- **TypeScript strict mode**
- Заборонено ігнорування ESLint правил без використання `--report-unused-disable-directives`

## 🛠️ Розгортання

[Watch demo](https://rise-creative.netlify.app/)

👨‍💻 Автор
Богдан Павлів — Frontend Developer
📧 [bogdan.pavliv@gmail.com]
🌐 [My portfolio](https://bogdan-pavliv.netlify.app)