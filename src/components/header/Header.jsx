import LogoSVG from "../../assets/svg/logo";
import Container from "../UI/Container";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <header className={classes.header}>
      <Container className={classes["header__content"]}>
        <Link to="#intro" onClick={() => scrollToSection("intro")}>
          <LogoSVG className={classes.logo} alt="Logo" />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
