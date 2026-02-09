import styled from "styled-components";
import { Section } from "../styles";
import avatar from "/src/assets/avatar.jpg";

const HeroGrid = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #61dafb;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Name = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(90deg,#61dafb,#a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width:768px){
    font-size:36px;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  margin-bottom: 20px;
  opacity: .9;
`;

const Text = styled.p`
  font-size: 16px;
  opacity: .7;
  max-width: 720px;
  margin-bottom: 28px;
`;

const Buttons = styled.div`
  display:flex;
  gap:14px;
  flex-wrap:wrap;
`;

const Btn = styled.a`
  padding:12px 18px;
  border-radius:12px;
  font-weight:600;
  background:#61dafb;
  color:#000;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`;

export default function Hero() {
    return (
        <Section>
            <HeroGrid>
                <Avatar src={avatar} alt="Никита Курдияшко" />
                <div>
                    <Name>Никита Курдияшко</Name>
                    <Subtitle>Frontend Developer</Subtitle>

                    <Text>
                        Более 3.5 лет создаю и веду коммерческие веб-приложения на React/Next.js, включая SPA и SSR проекты с высокой нагрузкой.
                        Внедряю масштабируемую архитектуру (FSD, Redux/Zustand, TanStack Query), оптимизирую производительность до Lighthouse 90+
                        и сокращаю время загрузки страниц на 30–50%.
                        Настраиваю CI/CD, сервера и деплой, обеспечивая стабильность релизов без ручных выкладок.
                        Координирую работу фронтенд-команды, распределяю задачи и контролирую качество кода, довожу проекты от идеи до продакшена,
                        полностью закрывая фронтенд и инфраструктуру.
                    </Text>

                    <Buttons>
                        <Btn href="mailto:nikitakurdiasko@gmail.com">Email</Btn>
                        <Btn href="https://t.me/kurdnika">Telegram</Btn>
                        <Btn href="https://github.com/kurd5083" target="_blank" rel="noopener noreferrer">GitHub</Btn>
                    </Buttons>
                </div>
            </HeroGrid>
        </Section>
    );
}
