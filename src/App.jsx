import { Global, Page } from "./styles";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Global />
      <Page>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
      </Page>
    </>
  );
}
