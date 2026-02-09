// Projects.js (Projects с hover-анимацией и метриками)
import styled from "styled-components";
import { Section, Title } from "../styles";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export default function Projects() {
  return (
    <Section>
      <Title>Проекты</Title>
      <Grid>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </Grid>
    </Section>
  );
}
