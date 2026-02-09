import styled from "styled-components";
import { Card } from "../styles";
import { motion } from "framer-motion";

// Основная карточка с hover эффектом
const ProjectCardWrapper = styled(motion(Card))`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(97, 218, 251, 0.25);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 16px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 14px;
  opacity: 0.75;
  margin-bottom: 12px;
`;

const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

const StackTag = styled.span`
  font-size: 12px;
  opacity: 0.7;
  background: rgba(97, 218, 251, 0.1);
  color: #61dafb;
  padding: 4px 8px;
  border-radius: 8px;
`;

const Link = styled.a`
  font-weight: 600;
  color: #61dafb;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: none;
    background: #61dafb;
    color: #000;
    padding: 6px 12px;
    border-radius: 8px;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <ProjectCardWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Img src={project.image} alt={project.title} />
      <Name>{project.title}</Name>
      <Desc>{project.description}</Desc>
      <StackWrapper>
        {project.stack.split(",").map((tech) => (
          <StackTag key={tech.trim()}>{tech.trim()}</StackTag>
        ))}
      </StackWrapper>
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        Открыть проект →
      </Link>
    </ProjectCardWrapper>
  );
}
