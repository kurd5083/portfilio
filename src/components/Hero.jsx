import { Section } from "../styles";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import avatar from "/src/assets/avatar.jpg";

const glitch = keyframes`
  0% { text-shadow: -2px 0 #ff00a0, 2px 0 #00ff9d; transform: skew(0deg); }
  20% { text-shadow: 2px 0 #ff00a0, -2px 0 #00ff9d; transform: skew(2deg); }
  40% { text-shadow: -1px 0 #ff00a0, 1px 0 #00ff9d; transform: skew(-1deg); }
  60% { text-shadow: 1px 0 #ff00a0, -1px 0 #00ff9d; transform: skew(1deg); }
  80% { text-shadow: -2px 0 #ff00a0, 2px 0 #00ff9d; transform: skew(0deg); }
  100% { text-shadow: 0 0 #ff00a0, 0 0 #00ff9d; transform: skew(0deg); }
`;

const pulseGreen = keyframes`
  0% { box-shadow: 0 0 0px #00ff9d00, inset 0 0 0px #00ff9d00; }
  50% { box-shadow: 0 0 12px #00ff9d80, inset 0 0 6px #00ff9d40; }
  100% { box-shadow: 0 0 0px #00ff9d00, inset 0 0 0px #00ff9d00; }
`;

const scan = keyframes`
  0% { background-position: 0 -200%; }
  100% { background-position: 0 200%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const borderFlow = keyframes`
  0% { border-color: #00ff9d; box-shadow: 0 0 5px #00ff9d; }
  33% { border-color: #ff00a0; box-shadow: 0 0 5px #ff00a0; }
  66% { border-color: #00b8ff; box-shadow: 0 0 5px #00b8ff; }
  100% { border-color: #00ff9d; box-shadow: 0 0 5px #00ff9d; }
`;

export default function Hero() {
  return (
    <CyberSection>
      <GridOverlay />
      <ScanningBeam />
      
      <HeroGrid>
        <AvatarWrapper>
          <GlowRing />
          <Avatar
            src={avatar}
            alt="Никита Курдияшко"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
          />
          <StatusBadge>
            <OnlineDot />
            ONLINE
          </StatusBadge>
        </AvatarWrapper>

        <div>
          <TerminalLine>
            <Prompt>$</Prompt> whoami
          </TerminalLine>
          
          <Name
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Bracket>&lt;</Bracket>
            Никита Курдияшко
            <Bracket>/&gt;</Bracket>
          </Name>

          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterCursor>
              ❯❯ Middle Frontend Developer
              <BlinkingCursor>_</BlinkingCursor>
            </TypewriterCursor>
          </Subtitle>

          <DividerLine />

          <Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CodeComment>// Моя главная цель — углубляться в React и его экосистему</CodeComment>
            <br/>
            Моя главная цель — углубляться в <NeonSpan>React</NeonSpan> и его экосистему, стать настоящим профи в этой области. 
            Не распыляться на всё подряд, а хорошо понимать инструменты, с которыми работаю: хуки, мемоизацию, 
            стейт-менеджеры, архитектуру, производительность. Хочу знать <NeonSpan>React</NeonSpan> так, чтобы видеть 
            не только "как сделать", но и "как сделать правильно и масштабируемо".
            <br/><br/>
            <CodeComment>// Ценности в работе</CodeComment>
            <br/>
            В работе ценю две вещи: <NeonSpan>понятные процессы</NeonSpan> и <NeonSpan>свободу</NeonSpan>. 
            Когда нет бюрократии, но есть чёткое понимание, что и зачем мы делаем. 
            Когда можно спокойно сказать "я не успеваю" и пересмотреть сроки, а не молча выгорать по ночам.
            <br/><br/>
            <CodeComment>// О себе</CodeComment>
            <br/>
            Если коротко: я надёжный, люблю разбираться, умею доводить до конца и не боюсь задавать неудобные вопросы. 
            Ищу команду, где ценят качество и дают расти.
            
            <LinksBlock>
              <LinkItem>
                <LinkIcon>💼</LinkIcon>
                <LinkHref href="https://portfoliokurdnika.netlify.app" target="_blank">
                  portfoliokurdnika.netlify.app
                </LinkHref>
              </LinkItem>
              <LinkItem>
                <LinkIcon>💻</LinkIcon>
                <LinkHref href="https://github.com/kurd5083" target="_blank">
                  github.com/kurd5083
                </LinkHref>
              </LinkItem>
            </LinksBlock>
          </Text>
          
          <Buttons>
            <Btn
              href="mailto:nikitakurdiasko@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <BtnIcon>✉️</BtnIcon>
              Email
              <BtnArrow>↗</BtnArrow>
            </Btn>
            <Btn
              href="https://t.me/kurdnika"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              $primary
            >
              <BtnIcon>📱</BtnIcon>
              Telegram
              <BtnArrow>↗</BtnArrow>
            </Btn>
            <Btn
              href="https://github.com/kurd5083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <BtnIcon>⎇</BtnIcon>
              GitHub
              <BtnArrow>↗</BtnArrow>
            </Btn>
          </Buttons>
        </div>
      </HeroGrid>
      <BottomScanLine />
    </CyberSection>
  );
}


const CyberSection = styled(Section)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #05080f 0%, #0a0f18 100%);
  padding: 30px 20px;
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
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
`;

const ScanningBeam = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 255, 157, 0.03) 50%,
    transparent 100%
  );
  animation: ${scan} 8s linear infinite;
  pointer-events: none;
  z-index: 0;
`;

const BottomScanLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff9d, #ff00a0, #00ff9d, transparent);
  animation: ${pulseGreen} 2s infinite;
  z-index: 1;
`;

const HeroGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
    text-align: center;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const GlowRing = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff9d, #ff00a0, #00b8ff);
  opacity: 0.6;
  animation: ${borderFlow} 3s infinite;
  filter: blur(8px);
  z-index: -1;
`;

const Avatar = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #00ff9d;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.3);
  filter: grayscale(15%) contrast(1.1);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%) contrast(1.2);
    box-shadow: 0 0 40px rgba(0, 255, 157, 0.6);
    border-color: #ff00a0;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #0a0e14;
  border: 1px solid #00ff9d;
  border-radius: 20px;
  padding: 4px 10px;
  font-family: 'Fira Code', monospace;
  font-size: 9px;
  font-weight: 600;
  color: #00ff9d;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(4px);
  letter-spacing: 1px;
`;

const OnlineDot = styled.span`
  width: 8px;
  height: 8px;
  background: #00ff9d;
  border-radius: 50%;
  animation: ${pulseGreen} 1.5s infinite;
  box-shadow: 0 0 5px #00ff9d;
`;

const TerminalLine = styled.div`
  font-family: 'Share Tech Mono', 'Fira Code', monospace;
  font-size: 13px;
  color: #00ff9d;
  margin-bottom: 15px;
  opacity: 0.7;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Prompt = styled.span`
  color: #ff00a0;
  font-weight: bold;
  margin-right: 10px;
`;

const Name = styled(motion.h1)`
  font-size: 68px;
  font-weight: 800;
  margin-bottom: 16px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  
  background: linear-gradient(135deg, #00ff9d, #00b8ff, #ff00a0, #00ff9d);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${glitch} 5s infinite ease-in-out;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const Bracket = styled.span`
  color: #ff00a0;
  -webkit-text-fill-color: #ff00a0;
  text-shadow: 0 0 5px #ff00a0;
  font-weight: 600;
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  margin-bottom: 24px;
  font-family: 'Fira Code', monospace;
  color: #b3ffe0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TypewriterCursor = styled.span`
  display: inline-block;
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 10px;
  margin-left: 4px;
  animation: ${blink} 1s step-end infinite;
  color: #00ff9d;
`;

const DividerLine = styled.div`
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #00ff9d, #ff00a0);
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Text = styled(motion.p)`
  font-size: 15px;
  opacity: 0.85;
  margin-bottom: 32px;
  line-height: 1.7;
  color: #c0d0d0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
`;

const CodeComment = styled.span`
  color: #4a8a7a;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
`;

const NeonSpan = styled.span`
  color: #00ff9d;
  text-shadow: 0 0 4px #00ff9d;
  font-weight: 500;
`;

const LinksBlock = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #0a0e1490;
  border: 0.5px solid #1f3a2a;
  border-radius: 12px;
  backdrop-filter: blur(4px);
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkIcon = styled.span`
  font-size: 16px;
`;

const LinkHref = styled.a`
  color: #00b8ff;
  text-decoration: none;
  transition: all 0.2s;
  word-break: break-all;
  
  &:hover {
    color: #00ff9d;
    text-shadow: 0 0 4px #00ff9d;
    text-decoration: underline;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Btn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${props => props.$primary ? `
    background: linear-gradient(135deg, #00ff9d20, #ff00a020);
    border-color: #ff00a0;
    color: #ff00a0;
    box-shadow: 0 0 10px #ff00a040;
    
    &:hover {
      background: linear-gradient(135deg, #00ff9d40, #ff00a040);
      box-shadow: 0 0 20px #ff00a080;
      border-color: #ff00a0;
    }
  ` : `
    background: #0a0e14;
    border-color: #2a5a4a;
    color: #00ff9d;
    
    &:hover {
      background: #00ff9d20;
      border-color: #00ff9d;
      box-shadow: 0 0 15px #00ff9d60;
    }
  `}
`;

const BtnIcon = styled.span`
  font-size: 16px;
`;

const BtnArrow = styled.span`
  font-size: 14px;
  transition: transform 0.2s;
  
  ${Btn}:hover & {
    transform: translate(2px, -2px);
  }
`;