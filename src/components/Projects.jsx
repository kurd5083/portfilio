import styled from "styled-components";
import { Section, Title } from "../styles";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Projects() {
  return (
    <Section>
      <Title>Проекты</Title>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </Grid>
    </Section>
  );
}
