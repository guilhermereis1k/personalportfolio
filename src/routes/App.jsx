import "./App.css";
import Intro from "../components/Intro.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";
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
