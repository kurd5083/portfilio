import styled from "styled-components";
import { Section, Title, Card } from "../styles";
import { motion } from "framer-motion";

const Company = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #61dafb;
`;

const List = styled.ul`
  padding-left: 18px;
  line-height: 1.7;
  opacity: 0.85;
  font-size: 14px;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #61dafb;
    font-weight: bold;
  }
`;

const AnimatedCard = styled(motion(Card))`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(97, 218, 251, 0.15);
  padding: 28px 24px;
  border-radius: 18px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(97, 218, 251, 0.4);
    box-shadow: 0 10px 20px rgba(97, 218, 251, 0.2);
  }
`;

export default function Experience() {
  const experiences = [
    {
      company: "Вортекс Инновации",
      points: [
        "Разрабатывал SPA и SSR веб-приложения на React и Next.js с архитектурой FSD, повышая модульность и масштабируемость.",
        "Оптимизировал производительность: достигал Lighthouse 90+, сокращал время загрузки страниц на 30–50%, повышал UX и retention пользователей.",
        "Внедрил современное управление состоянием (Redux Toolkit, Zustand), ускорив разработку новых функций на 20–30%.",
        "Организовал работу фронтенд-команды: декомпозиция задач, code review, контроль сроков и качества.",
        "Настроил CI/CD, сервера, SSL и домены, что позволило выпускать стабильные релизы без ошибок и вручную.",
        "Проводил комплексное тестирование на разных устройствах и браузерах, повысив совместимость и стабильность интерфейса."
      ]
    },
    {
      company: "Xenlp",
      points: [
        "Разрабатывал масштабируемый фронтенд для SPA и SSR приложений на React и Next.js, улучшая производительность и стабильность продуктов.",
        "Создал эффективную архитектуру управления состоянием с Redux Toolkit и внедрил TanStack Query, сократив количество кода и ускорив интеграцию с API.",
        "Реализовал комплексное взаимодействие с REST API: получение данных, отправка форм, обработка ошибок, оптимизация сетевых запросов.",
        "Разрабатывал и кастомизировал сайты на WordPress, интегрировал темы и плагины, улучшая функциональность и производительность.",
        "Внедрил улучшения в фронтенд-процессах, что ускорило выпуск новых фич на 15–20% и снизило количество багов в продакшене."
      ]
    }
  ];

  return (
    <Section>
      <Title>Опыт работы</Title>
      {experiences.map((exp, idx) => (
        <AnimatedCard
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          style={{ marginBottom: "20px" }}
        >
          <Company>{exp.company}</Company>
          <List>
            {exp.points.map((p, i) => (
              <ListItem key={i}>{p}</ListItem>
            ))}
          </List>
        </AnimatedCard>
      ))}
    </Section>
  );
}
