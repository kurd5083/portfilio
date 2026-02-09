import styled from "styled-components";
import { Section, Title, Card } from "../styles";
import { motion } from "framer-motion";

// Обертка всех блоков
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

// Блок категории
const Group = styled(motion.div)`
  background: linear-gradient(145deg, rgba(97,218,251,0.05), rgba(167,139,250,0.05));
  border-radius: 18px;
  border: 1px solid rgba(97, 218, 251, 0.25);
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 25px rgba(97,218,251,0.25);
    border-color: rgba(97,218,251,0.5);
  }
`;

// Название категории
const Label = styled.h4`
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 14px;
  color: #61dafb;
`;

// Список тегов
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// Отдельный тег
const Tag = styled.span`
  background: #1c212b;
  padding: 7px 14px;
  border-radius: 14px;
  font-size: 13px;
  border: 1px solid #2a2f3a;
  color: #fff;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    background: #61dafb;
    color: #000;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(97, 218, 251, 0.4);
  }
`;

const Block = ({ title, items, index }) => (
  <Group
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Label>{title}</Label>
    <Tags>
      {items.map((i) => (
        <Tag key={i}>{i}</Tag>
      ))}
    </Tags>
  </Group>
);

export default function Stack() {
  const stackBlocks = [
    { title: "Frontend", items: ["React","Next.js","JS","TS","HTML5","CSS3","Адаптивная верстка","Vite","React Native"] },
    { title: "State & Data", items: ["Redux Toolkit","Redux","Zustand","TanStack Query","REST API","Swagger"] },
    { title: "Styling & UI", items: ["styled-components","SCSS","CSS Modules","TailwindCSS","Ant Design","Figma"] },
    { title: "DevOps & Infrastructure", items: ["Git","GitHub","GitLab","CI/CD","Deploy","SSL"] },
    { title: "CMS & Integration", items: ["WordPress","API Integration"] },
    { title: "Architecture & Principles", items: ["FSD","DRY","KISS","YAGNI"] },
  ];

  return (
    <Section>
      <Title>Технологический стек</Title>
      <Card>
        <Wrapper>
          {stackBlocks.map((block, idx) => (
            <Block key={block.title} title={block.title} items={block.items} index={idx} />
          ))}
        </Wrapper>
      </Card>
    </Section>
  );
}
