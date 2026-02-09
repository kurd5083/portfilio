import styled from "styled-components";
import { Card } from "../styles";

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

const Stack = styled.p`
  font-size: 13px;
  opacity: 0.6;
  margin-bottom: 16px;
`;

const Link = styled.a`
  font-weight: 600;
  color: #61dafb;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Img src={project.image} alt={project.title} />
      <Name>{project.title}</Name>
      <Desc>{project.description}</Desc>
      <Stack>{project.stack}</Stack>
      <Link href={project.link} target="_blank">Открыть проект →</Link>
    </Card>
  );
}
