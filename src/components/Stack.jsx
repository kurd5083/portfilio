import styled from "styled-components";
import { Section, Title, Card } from "../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Group = styled.div``;

const Label = styled.h4`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background: #1c212b;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid #2a2f3a;
  transition: 0.2s;

  &:hover {
    background: #61dafb;
    color: #000;
    transform: translateY(-2px);
  }
`;

const Block = ({ title, items }) => (
  <Group>
    <Label>{title}</Label>
    <Tags>
      {items.map((i) => (
        <Tag key={i}>{i}</Tag>
      ))}
    </Tags>
  </Group>
);

export default function Stack() {
  return (
    <Section>
      <Title>Технологический стек</Title>

      <Card>
        <Wrapper>
          <Block
            title="Frontend"
            items={[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Адаптивная верстка",
              "Vite",
              "React Native"
            ]}
          />

          <Block
            title="State & Data"
            items={[
              "Redux Toolkit",
              "Redux",
              "Zustand",
              "TanStack Query",
              "REST API",
              "Swagger"
            ]}
          />

          <Block
            title="Styling & UI"
            items={[
              "styled-components",
              "SCSS",
              "CSS Modules",
              "TailwindCSS",
              "Ant Design",
              "Figma"
            ]}
          />

          <Block
            title="DevOps & Infrastructure"
            items={[
              "Git",
              "GitHub",
              "GitLab",
              "CI/CD",
              "Deploy",
              "SSL"
            ]}
          />

          <Block
            title="CMS & Integration"
            items={[
              "WordPress",
              "API Integration"
            ]}
          />

          <Block
            title="Architecture & Principles"
            items={[
              "FSD",
              "DRY",
              "KISS",
              "YAGNI"
            ]}
          />
        </Wrapper>
      </Card>
    </Section>
  );
}
