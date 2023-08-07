import "./App.css";
import Intro from "../components/Intro";
import Header from "../components/header/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
