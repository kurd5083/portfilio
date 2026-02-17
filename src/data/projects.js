import aipost from "/src/assets/aipost.jpg";
import channelstats from "/src/assets/channelstats.jpg";
import klassikgames from "/src/assets/klassikgames.jpg";
import searchProducts from "/src/assets/search-products.jpg";
import gamerelics from "/src/assets/gamerelics.jpg";
import grambee from "/src/assets/grambee.jpg";
import gamekool from "/src/assets/gamekool.jpg";
import yandex from "/src/assets/yandex.jpg";

export const projects = [
  {
    title: "AIPosting",
    image: aipost,
    stack:
      "React, TypeScript, Zustand, TanStack Query, Styled Components, Swiper, REST API, Vite, CI/CD",
    description:
      "Платформа для автоматической генерации и публикации контента в соцсетях с помощью AI. Позволяет создавать посты, адаптированные под бренд и целевую аудиторию, планировать публикации и работать с многоформатным контентом.",
    link: "https://aiposting.live/",
  },
  {
    title: "ChannelStats",
    image: channelstats,
    stack:
      "React, TypeScript, Zustand, TanStack Query, Styled TailwindCSS, REST API, Vite, SheetJS (xlsx)",
    description:
    "Платформа для мониторинга и анализа статистики Telegram-каналов. Позволяет отслеживать подписки, отписки, чистый трафик и конверсию, строить графики активности по часам, фильтровать каналы и выгружать данные в Excel для удобного анализа.",
    link: "https://channelstats.aiposting.live/",
  },
  {
    title: "KlassikGames",
    image: klassikgames,
    stack:
      "React, JavaScript, HTML5, CSS3, TailwindCSS, Zustand, Styled Components, Swiper, REST API, Vite",
    description:
      "Интерактивный игровой магазин классических браузерных игр с адаптивным интерфейсом и современным UI. Реализована логика фильтрации, поиска и навигации по категориям, быстрый отклик на действия пользователя и удобный дизайн.",
    link: "https://klassikgames-de.netlify.app/",
  },
  {
    title: "RAWG Game Search",
    image: searchProducts,
    stack:
      "React, JavaScript, HTML5, CSS3, SCSS, Redux Toolkit, TanStack Query, REST API, TailwindCSS, Vite",
    description:
      "Приложение для поиска игр с использованием RAWG API. Позволяет фильтровать и сортировать игры по жанрам, платформам и популярности, отображает подробную информацию о каждой игре, включая рейтинг и скриншоты.",
    link: "https://search-products-shop.netlify.app/",
  },
  {
    title: "GameRelics",
    image: gamerelics,
    stack:
      "React, JavaScript, HTML5, CSS3, TailwindCSS, Zustand, Styled Components, REST API, Vite, Framer Motion",
    description:
      "Онлайн-магазин редких и классических игровых артефактов. Пользователи могут фильтровать, сортировать и просматривать коллекции игр. Адаптивный дизайн, плавные анимации и отзывчивый интерфейс обеспечивают удобство на всех устройствах.",
    link: "https://gamerelics-uk.netlify.app/",
  },
  {
    title: "GRAMBEE",
    image: grambee,
    stack:
      "React, Next.js, TypeScript, TailwindCSS, NestJS, REST API, Vite, Zustand, TanStack Query, CI/CD",
    description:
      "GRAMBEE — мощный инструмент для управления трафиком, который превращает сложные процессы в простой и эффективный. Помогает масштабировать бизнес, экономя время и ресурсы на рутинных задачах. Frontend на React/Next.js с интеграцией NestJS backend.",
    link: "https://landing-nextjs.netlify.app/",
  },
  {
    title: "GameKool",
    image: gamekool,
    stack:
      "React, JavaScript, HTML5, CSS3, TailwindCSS, Zustand, Styled Components, REST API, Vite, Framer Motion, Swiper",
    description:
      "Интернет-магазин классических игр с адаптивным интерфейсом, фильтрацией по категориям и навигацией по коллекциям. Проект демонстрирует навыки работы с динамическими данными, интерактивным UI и современными анимациями.",
    link: "https://gamekool-de.netlify.app/",
  },
  {
    title: "Yandex Drag & Drop Shop",
    image: yandex,
    stack:
        "React, TypeScript, Zustand, Styled Components, Framer Motion, Vite, Drag & Drop, Cart, Checkout",
    description:
    "Тестовое для Яндекса: интернет-магазин с drag & drop товаров в корзину, подсчетом суммы и симуляцией оплаты. Демонстрирует навыки работы с интерактивным UI, управлением состояния и современной архитектурой фронтенда.",
    link: "https://yandex-projects.netlify.app/",
  },
];
