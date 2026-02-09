import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background: radial-gradient(circle at 20% 20%, #161a22, #0d0f14);
    color: #fff;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 26px;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(97, 218, 251, 0.4);
  }
`;
