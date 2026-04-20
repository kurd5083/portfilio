import styled, { keyframes } from "styled-components";
import { Section, Title, Card } from "../styles";
import { motion } from "framer-motion";

const glitch = keyframes`
  0% { text-shadow: -2px 0 #ff00c1, 2px 0 #00ff9d; }
  20% { text-shadow: 2px 0 #ff00c1, -2px 0 #00ff9d; }
  40% { text-shadow: -1px 0 #ff00c1, 1px 0 #00ff9d; }
  60% { text-shadow: 1px 0 #ff00c1, -1px 0 #00ff9d; }
  80% { text-shadow: -2px 0 #ff00c1, 2px 0 #00ff9d; }
  100% { text-shadow: 0 0 #ff00c1, 0 0 #00ff9d; }
`;

const pulseGreen = keyframes`
  0% { box-shadow: 0 0 0px #00ff9d00, inset 0 0 0px #00ff9d00; }
  50% { box-shadow: 0 0 8px #00ff9d80, inset 0 0 4px #00ff9d40; }
  100% { box-shadow: 0 0 0px #00ff9d00, inset 0 0 0px #00ff9d00; }
`;

const scan = keyframes`
  0% { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`;

const flicker = keyframes`
  0% { opacity: 0.3; text-shadow: none; }
  10% { opacity: 1; text-shadow: 0 0 5px #00ff9d; }
  20% { opacity: 0.5; }
  30% { opacity: 1; }
  100% { opacity: 1; }
`;

const Block = ({ title, items, index }) => (
  <Group
    initial={{ opacity: 0, y: 30, rotateX: -10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.08,
      type: "spring",
      stiffness: 100,
      damping: 12
    }}
  >
    <GlitchLine />
    <Label>
      <LabelText>{title}</LabelText>
      <CursorBlock />
    </Label>
    <Tags>
      {items.map((i) => (
        <Tag key={i}>
          <Bracket>&lt;</Bracket>
          {i}
          <Bracket>/&gt;</Bracket>
        </Tag>
      ))}
    </Tags>
    <StatusBar>
      <Dot />
      <ScanLine />
      <CodeRef>0x{Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}</CodeRef>
    </StatusBar>
  </Group>
);

export default function Stack() {
 const stackBlocks = [
  { 
    title: "Frontend", 
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Адаптивная верстка", "Vite"] 
  },
  { 
    title: "State & Data", 
    items: ["Zustand", "Redux Toolkit", "TanStack Query", "REST API", "Swagger", "Axios", "WebSocket"] 
  },
  { 
    title: "Styling & UI", 
    items: ["TailwindCSS", "SCSS", "CSS Modules", "styled-components", "Ant Design", "Figma", "БЭМ"] 
  },
  { 
    title: "DevOps & Infrastructure", 
    items: ["Git", "GitHub", "GitLab", "CI/CD", "GitLab CI", "GitHub Actions", "Docker", "Netlify", "ESLint", "Prettier"] 
  },
  { 
    title: "Testing", 
    items: ["Jest", "Vitest"] 
  },
  { 
    title: "Architecture & Principles", 
    items: ["FSD (Feature-Sliced Design)", "Telegram Mini Apps", "SOLID", "DRY", "KISS", "YAGNI", "ООП"] 
  }
];
  return (
    <Container>
      <Title>
        <CyberBracket>[</CyberBracket> ТЕХНОЛОГИЧЕСКИЙ СТЕК <CyberBracket>]</CyberBracket>
        <PromptSign>$ _</PromptSign>
      </Title>
      <Card>
        <GridOverlay />
        <Wrapper>
          {stackBlocks.map((block, idx) => (
            <Block key={block.title} title={block.title} items={block.items} index={idx} />
          ))}
        </Wrapper>
        <FooterLine>
          <span>❯❯ SYSTEM: ACTIVE</span>
          <span>NODE: {stackBlocks.length} MODULES</span>
        </FooterLine>
      </Card>
    </Container>
  );
}

const Container = styled(Section)`
  padding: 0 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  position: relative;
  z-index: 2;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(#00ff9d08 1px, transparent 1px),
    linear-gradient(90deg, #00ff9d08 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: 0;
`;

const Group = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, #0b0e17 0%, #06080f 100%);
  border-radius: 20px;
  border: 1px solid #1f3a3a;
  border-top: 1px solid #2a5a4a;
  padding: 22px;
  backdrop-filter: blur(2px);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  overflow: hidden;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 65%, #00ff9d08, transparent 95%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #00ff9d20 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: #00ff9d;
    box-shadow: 0 0 20px #00ff9d40, 0 10px 30px rgba(0, 0, 0, 0.8);
    
    &::after {
      background: radial-gradient(circle, #00ff9d60 0%, transparent 70%);
    }
  }
`;

const GlitchLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff9d, #ff00a0, #00ff9d, transparent);
  animation: ${pulseGreen} 2s infinite;
  opacity: 0.6;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  border-bottom: 1px dashed #2a5a4a;
  padding-bottom: 10px;
`;

const LabelText = styled.h4`
  font-family: 'Share Tech Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00ff9d;
  background: #0a0e14;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  border-left: 3px solid #ff00a0;
  animation: ${flicker} 4s infinite;
  
  &:hover {
    animation: ${glitch} 0.3s infinite;
  }
`;

const CursorBlock = styled.div`
  width: 8px;
  height: 14px;
  background: #00ff9d;
  opacity: 0.8;
  animation: ${pulseGreen} 1s infinite;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const Bracket = styled.span`
  color: #ff00a0;
  font-weight: 600;
  opacity: 0.7;
  transition: all 0.2s;
`;

const Tag = styled.span`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 12px;
  background: #0f121cb3;
  backdrop-filter: blur(2px);
  border-radius: 20px;
  color: #b3ffe0;
  border: 0.5px solid #2a5a4a;
  letter-spacing: 0.3px;
  cursor: crosshair;
  transition: all 0.25s ease;
  box-shadow: inset 0 1px 0 #1e2a1e20, 0 2px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: #00ff9d20;
    color: #00ff9d;
    border-color: #00ff9d;
    box-shadow: 0 0 8px #00ff9d80, inset 0 0 6px #00ff9d30;
    transform: translateY(-2px) scale(1.03);
    
    ${Bracket} {
      color: #00ff9d;
      opacity: 1;
      text-shadow: 0 0 3px #00ff9d;
    }
  }
`;

const StatusBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 0.5px solid #1f2a2a;
  font-family: monospace;
  font-size: 9px;
  color: #4a6a5a;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #00ff9d;
  border-radius: 50%;
  animation: ${pulseGreen} 1.5s infinite;
  box-shadow: 0 0 5px #00ff9d;
`;

const ScanLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #00ff9d, transparent);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff9d, #ff00a0, transparent);
    animation: ${scan} 3s linear infinite;
  }
`;

const CodeRef = styled.span`
  font-size: 9px;
  font-family: monospace;
  background: #0a0c10;
  padding: 2px 6px;
  border-radius: 4px;
  color: #6a8a7a;
  letter-spacing: 1px;
`;

const CyberBracket = styled.span`
  color: #ff00a0;
  font-weight: 800;
  font-size: 1.3em;
  text-shadow: 0 0 5px #ff00a0;
`;

const PromptSign = styled.span`
  font-family: monospace;
  color: #00ff9d;
  margin-left: 12px;
  font-size: 1.2rem;
  animation: ${pulseGreen} 1s step-end infinite;
`;

const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #1a2a2a;
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  color: #3a5a4a;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  span:first-child {
    color: #00ff9d;
    text-shadow: 0 0 3px #00ff9d;
  }
`;