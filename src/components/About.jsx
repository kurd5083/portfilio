import styled from "styled-components";
import { Section, Title, Card } from "../styles";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: #61dafb;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 14px;
  opacity: 0.75;
  line-height: 1.55;
`;

export default function About() {
  return (
    <Section>
      <Title>Ключевые достижения</Title>

      <Grid>
        <Card>
          <Stat>Full ownership</Stat>
          <Text>
            Вёл проекты от идеи и проектирования архитектуры 
            до продакшен-деплоя и поддержки
          </Text>
        </Card>

        <Card>
          <Stat>Performance</Stat>
          <Text>
            Повысил производительность приложений до Lighthouse 90+ 
            и сократил время загрузки страниц на 30–50%
          </Text>
        </Card>

        <Card>
          <Stat>CI/CD Automation</Stat>
          <Text>
            Настроил автоматические сборки и деплой, 
            ускорив релизы и минимизировав продакшен-ошибки
          </Text>
        </Card>

        <Card>
          <Stat>Architecture</Stat>
          <Text>
            Проектировал масштабируемую архитектуру (FSD, Redux/Zustand, SSR), 
            упрощающую поддержку и развитие продукта
          </Text>
        </Card>

        <Card>
          <Stat>Team coordination</Stat>
          <Text>
            Декомпозиция задач, контроль сроков, 
            организация работы фронтенд-команды
          </Text>
        </Card>

        <Card>
          <Stat>Production experience</Stat>
          <Text>
            3.5+ года коммерческой разработки SPA/SSR, интернет-магазинов 
            и корпоративных сервисов с реальными пользователями
          </Text>
        </Card>
      </Grid>
    </Section>
  );
}
