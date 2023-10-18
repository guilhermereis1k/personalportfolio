import "./App.css";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { useState, createContext } from "react";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("ptBR");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </LanguageContext.Provider>
  );
}

export default App;
