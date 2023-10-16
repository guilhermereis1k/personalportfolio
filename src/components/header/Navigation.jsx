import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ul className={classes.nav}>
      <Link to="#about" onClick={() => scrollToSection("about")}>
        <li className={classes.nav__link}>Sobre mim</li>
      </Link>
      <Link to="#skills" onClick={() => scrollToSection("skills")}>
        <li className={classes.nav__link}>Habilidades</li>
      </Link>
      <Link to="#portfolio" onClick={() => scrollToSection("portfolio")}>
        <li className={classes.nav__link}>Portfólio</li>
      </Link>
      <Link to="#contact" onClick={() => scrollToSection("contact")}>
        <li className={classes.nav__link}>Contato</li>
      </Link>
    </ul>
  );
};

export default Navigation;
