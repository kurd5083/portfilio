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
    desc: "Вёл проекты от идеи и архитектуры до продакшен-деплоя и поддержки"
  },
  {
    title: "Performance",
    desc: "Lighthouse 90+, ускорение загрузки страниц на 30–50%"
  },
  {
    title: "CI/CD Automation",
    desc: "Настроил автоматические сборки и деплой, минимизировав ошибки"
  },
  {
    title: "Architecture",
    desc: "Проектировал масштабируемую архитектуру (FSD, Redux/Zustand, SSR)"
  },
  {
    title: "Team Coordination",
    desc: "Декомпозиция задач, контроль сроков, организация работы команды"
  },
  {
    title: "Production Experience",
    desc: "3.5+ года коммерческой разработки SPA/SSR, интернет-магазинов и сервисов"
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