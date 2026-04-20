// Projects.js — Киберпанк / IT-стиль
import styled, { keyframes } from "styled-components";
import { Section, Title } from "../styles";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const pulseGrid = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 0.3; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) { 
    grid-template-columns: repeat(2, 1fr); 
  }
  @media (max-width: 600px) { 
    grid-template-columns: 1fr; 
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 16px 24px;
  background: #0a0e1490;
  border: 0.5px solid #1f3a2a;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span:first-child {
    color: #4a8a7a;
  }
  
  span:last-child {
    color: #00ff9d;
    font-weight: 700;
    text-shadow: 0 0 4px #00ff9d;
  }
`;

const StatValue = styled.span`
  font-size: 20px;
  font-weight: 800;
`;

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, transparent, #00ff9d, #ff00a0, transparent);
  
  @media (max-width: 768px) {
    width: 80%;
    height: 1px;
  }
`;

export default function Projects() {
  // Подсчёт метрик
  const totalProjects = projects.length;
  const totalTechs = [...new Set(projects.flatMap(p => p.stack.split(',').map(t => t.trim())))].length;
  
  return (
    <Container>
      <Title>
        <TerminalPrompt>❯❯ ./projects --list</TerminalPrompt>
        <BlinkingCursor />
      </Title>
      
      <Grid>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.08,
              type: "spring",
              stiffness: 120,
              damping: 12
            }}
          >
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </Grid>
      
      <StatsBar>
        <StatItem>
          <span>📁 REPOSITORIES</span>
          <StatValue>{totalProjects}</StatValue>
        </StatItem>
        <Separator />
        <StatItem>
          <span>⚙️ TECH STACK</span>
          <StatValue>{totalTechs}</StatValue>
        </StatItem>
        <Separator />
        <StatItem>
          <span>🚀 DEPLOYED</span>
          <StatValue>{projects.filter(p => p.link).length}</StatValue>
        </StatItem>
        <Separator />
        <StatItem>
          <span>🟢 STATUS</span>
          <span>ACTIVE</span>
        </StatItem>
      </StatsBar>
    </Container>
  );
}
const Container = styled(Section)`
  padding: 0 20px;
`;
const TerminalPrompt = styled.span`
  color: #00ff9d;
  font-family: 'Fira Code', monospace;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 12px;
  height: 1.8rem;
  background: #00ff9d;
  margin-left: 8px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    height: 1.3rem;
  }
`;