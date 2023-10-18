import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { LanguageContext } from "../../routes/App";
import { useContext } from "react";

const Navigation = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ul className={classes.nav}>
      <Link to="#about" onClick={() => scrollToSection("about")}>
        <li className={classes.nav__link}>
          {language == "ptBR" ? `Sobre mim` : `About me`}
        </li>
      </Link>
      <Link to="#skills" onClick={() => scrollToSection("skills")}>
        <li className={classes.nav__link}>
          {language == "ptBR" ? `Habilidade` : `Skills`}
        </li>
      </Link>
      <Link to="#portfolio" onClick={() => scrollToSection("portfolio")}>
        <li className={classes.nav__link}>
          {language == "ptBR" ? `Portfólio` : `Portfolio`}
        </li>
      </Link>
      <Link to="#contact" onClick={() => scrollToSection("contact")}>
        <li className={classes.nav__link}>
          {language == "ptBR" ? `Contato` : `Contact`}
        </li>
      </Link>
      <li
        onClick={() => {
          setLanguage(language == "ptBR" ? "enUS" : "ptBR");
        }}
        className={classes.nav__language}
      >
        {language == "ptBR" ? `PT-BR` : `EN-US`}
      </li>
    </ul>
  );
};

export default Navigation;
