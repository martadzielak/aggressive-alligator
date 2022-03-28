import { Background } from "./components/Background";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/styled";

export default function App() {
  return (
    <Main>
      <Header />
      <Content />
      <hr />
      <Footer />
      <Background />
    </Main>
  );
}
