import { Global, Page } from "./styles";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Global />
      <Page>
        <Hero />
        <Stack />
        <Projects />
      </Page>
    </>
  );
}
