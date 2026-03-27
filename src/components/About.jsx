import styled from "styled-components";
import { Section, Title, Card } from "../styles";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Stat = styled(motion.div)`
  font-size: 26px;
  font-weight: 800;
  color: #61dafb;
  margin-bottom: 8px;
`;

const Text = styled(motion.p)`
  font-size: 14px;
  opacity: 0.75;
  line-height: 1.55;
`;

const achievements = [
  {
    title: "Full Ownership",
    desc: "Вёл проекты от идеи и архитектуры до продакшен-деплоя и поддержки. Полный цикл разработки Telegram Web App с AI-функционалом, платёжной системой и аналитикой."
  },
  {
    title: "Performance",
    desc: "Lighthouse 90+, ускорение загрузки страниц на 30–50% за счёт lazy loading, код-сплиттинга, мемоизации и оптимизации изображений."
  },
  {
    title: "CI/CD Automation",
    desc: "Настроил автоматические сборки и деплой (Vite, GitHub Actions, GitLab CI). Сократил время релиза с 10–20 минут до 2–3 минут, минимизировал ошибки при деплое."
  },
  {
    title: "Architecture",
    desc: "Проектировал масштабируемую архитектуру (FSD, Atomic Design, Redux Toolkit, Zustand, TanStack Query, Next.js SSR). Единый типизированный API-слой, компонентный подход."
  },
  {
    title: "Team Coordination",
    desc: "Декомпозиция задач, контроль сроков, организация работы команды из 3 WordPress-разработчиков. Приёмка и тестирование сайтов, взаимодействие с backend-разработчиками и дизайнером."
  },
  {
    title: "Production Experience",
    desc: "3.5+ года коммерческой разработки SPA/SSR, интернет-магазинов, Telegram Web App, админ-панелей и систем обучения персонала. 370+ backend-эндпоинтов, интеграция платёжных систем (TBank, USDT)."
  },
  {
    title: "Telegram Mini Apps",
    desc: "Разработка Telegram Web App с интеграцией Telegram Mini Apps API, авторизацией через Telegram, AI-чатом и бесшовным переходом между ботом и приложением."
  },
  {
    title: "Payment Integration",
    desc: "Интеграция платёжных систем: TBank (Tinkoff), USDT (криптовалюта). Реализация механизмов создания платежей, обработки колбэков, комиссий, вывода средств и финансовой аналитики."
  },
  {
    title: "AI Integration",
    desc: "Разработка AI-редактора контента (генерация и форматирование текста, загрузка изображений) и встроенного AI-чата с обработкой запросов на основе базы знаний."
  },
  {
    title: "Infrastructure & DevOps",
    desc: "Настройка VPS, LAMP/LEMP, доменов, SSL, Cloudflare (DNS, проксирование, безопасность, кэширование). Разворачивание frontend-приложений на серверах."
  }
];

export default function About() {
  return (
    <Section>
      <Title>Ключевые достижения</Title>
      <Grid>
        {achievements.map((a, i) => (
          <Card
            as={motion.div}
            key={a.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Stat
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {a.title}
            </Stat>
            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.1 }}
            >
              {a.desc}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}