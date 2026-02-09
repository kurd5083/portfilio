import { Section } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import avatar from "/src/assets/avatar.jpg";

const HeroGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
`;

const Avatar = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #61dafb;
  box-shadow: 0 8px 20px rgba(97, 218, 251, 0.3);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled(motion.h1)`
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #61dafb, #a78bfa, #ff7eb3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 22px;
  margin-bottom: 20px;
  opacity: 0.85;
  background: linear-gradient(120deg, rgba(97,218,251,0.2), rgba(167,139,250,0.2));
  padding: 4px 8px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text = styled(motion.p)`
  font-size: 16px;
  opacity: 0.8;
  max-width: 720px;
  margin-bottom: 30px;
  line-height: 1.65;
  color: #d1d5db;
`;

const Buttons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Btn = styled(motion.a)`
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #61dafb, #a78bfa);
  color: #000;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(97, 218, 251, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    opacity: 0.9;
    box-shadow: 0 8px 20px rgba(97, 218, 251, 0.5);
  }
`;

export default function Hero() {
  return (
    <Section>
      <HeroGrid>
        <Avatar
          src={avatar}
          alt="Никита Курдияшко"
          initial={{ opacity: 0, x: -60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        />

        <div>
          <Name
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Никита Курдияшко
          </Name>

          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Middle Frontend Developer
          </Subtitle>

          <Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Более 3.5 лет создаю коммерческие веб-приложения на React и Next.js, включая SPA и SSR проекты с высокой нагрузкой. Внедряю масштабируемую архитектуру (FSD, Redux/Zustand, TanStack Query), оптимизирую производительность до Lighthouse 90+ и сокращаю время загрузки страниц на 30–50%. Настраиваю CI/CD, сервера и деплой, обеспечивая стабильность релизов без ручных выкладок. Координирую работу фронтенд-команды, распределяю задачи и контролирую качество кода, довожу проекты от идеи до продакшена.
          </Text>

          <Buttons>
            <Btn
              href="mailto:nikitakurdiasko@gmail.com"
              whileHover={{ scale: 1.05 }}
            >
              Email
            </Btn>
            <Btn
              href="https://t.me/kurdnika"
              whileHover={{ scale: 1.05 }}
            >
              Telegram
            </Btn>
            <Btn
              href="https://github.com/kurd5083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              GitHub
            </Btn>
          </Buttons>
        </div>
      </HeroGrid>
    </Section>
  );
}
