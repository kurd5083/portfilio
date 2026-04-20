// ProjectCard.js — Киберпанк / IT-стиль с метриками и ховерами
import styled, { keyframes } from "styled-components";
import { Card } from "../styles";
import { motion } from "framer-motion";
import { useState } from "react";

const glitchOverlay = keyframes`
  0% { transform: translate(0); opacity: 0; }
  10% { transform: translate(-2px, 1px); opacity: 0.3; }
  20% { transform: translate(2px, -1px); opacity: 0.2; }
  30% { transform: translate(0); opacity: 0; }
  100% { transform: translate(0); opacity: 0; }
`;

const scanCard = keyframes`
  0% { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`;

const pulseNeon = keyframes`
  0% { box-shadow: 0 0 5px #00ff9d40, inset 0 0 5px #00ff9d20; }
  50% { box-shadow: 0 0 20px #00ff9d80, inset 0 0 10px #00ff9d40; }
  100% { box-shadow: 0 0 5px #00ff9d40, inset 0 0 5px #00ff9d20; }
`;

const ProjectCardWrapper = styled(motion(Card))`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0b0e17 0%, #06080f 100%);
  border: 1px solid #1f3a3a;
  border-top: 1px solid #2a5a4a;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 65%, #00ff9d08, transparent 95%);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, #00ff9d15 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #00ff9d;
    box-shadow: 0 0 25px #00ff9d40, 0 15px 35px rgba(0, 0, 0, 0.5);
    
    &::after {
      background: radial-gradient(circle, #00ff9d40 0%, transparent 70%);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
  transition: all 0.4s ease;
  filter: grayscale(20%) contrast(1.05);
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%) contrast(1.1);
  }
`;

const GlitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ff00a030, #00ff9d30, transparent);
  pointer-events: none;
  opacity: 0;
  
  ${ImageContainer}:hover & {
    animation: ${glitchOverlay} 0.5s ease-in-out;
  }
`;

const CornerBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0a0e14cc;
  backdrop-filter: blur(4px);
  border: 0.5px solid #00ff9d;
  border-radius: 6px;
  padding: 4px 8px;
  font-family: 'Fira Code', monospace;
  font-size: 9px;
  color: #00ff9d;
  z-index: 2;
  letter-spacing: 0.5px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: linear-gradient(135deg, #00ff9d, #00b8ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.3px;
`;

const Desc = styled.p`
  font-size: 14px;
  opacity: 0.75;
  margin-bottom: 14px;
  line-height: 1.5;
  color: #c0d0d0;
`;

const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

const StackTag = styled.span`
  font-size: 11px;
  font-family: 'Fira Code', monospace;
  background: #00ff9d10;
  color: #00ff9d;
  padding: 5px 10px;
  border-radius: 20px;
  border: 0.5px solid #00ff9d30;
  transition: all 0.2s ease;
  
  &:hover {
    background: #00ff9d20;
    border-color: #00ff9d;
    box-shadow: 0 0 8px #00ff9d40;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 12px;
  border-top: 0.5px solid #1f3a2a;
`;

const Link = styled.a`
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #00b8ff;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #00ff9d;
    text-shadow: 0 0 4px #00ff9d;
    gap: 12px;
  }
`;

const Metrics = styled.div`
  display: flex;
  gap: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 10px;
  color: #4a8a7a;
`;

const MetricItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ScanEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, #00ff9d05 50%, transparent 100%);
  background-size: 100% 200%;
  pointer-events: none;
  opacity: 0;
  
  ${ProjectCardWrapper}:hover & {
    animation: ${scanCard} 1.5s ease-in-out;
    opacity: 1;
  }
`;

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Генерация "хеша" для каждого проекта
  const projectHash = project.title
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    .toString(16)
    .toUpperCase()
    .slice(0, 6);
  
  return (
    <ProjectCardWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ImageContainer>
        <Img src={project.image} alt={project.title} />
        <GlitchOverlay />
        <CornerBadge>
          0x{projectHash}
        </CornerBadge>
      </ImageContainer>
      
      <Name>
        &lt;{project.title} /&gt;
      </Name>
      
      <Desc>{project.description}</Desc>
      
      <StackWrapper>
        {project.stack.split(",").map((tech) => (
          <StackTag key={tech.trim()}>
            {tech.trim()}
          </StackTag>
        ))}
      </StackWrapper>
      
      <LinkWrapper>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <span>⟫</span> DEPLOY <span>⟫</span>
        </Link>
        <Metrics>
          <MetricItem>📁 {Math.floor(Math.random() * 50) + 10} files</MetricItem>
          <MetricItem>⚡ {Math.floor(Math.random() * 30) + 5} kB</MetricItem>
        </Metrics>
      </LinkWrapper>
      
      <ScanEffect />
    </ProjectCardWrapper>
  );
}