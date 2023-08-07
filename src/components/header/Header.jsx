import LogoSVG from "../../assets/svg/logo";
import Container from "../UI/Container";
import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes["header__content"]}>
        <LogoSVG className={classes.logo} alt="Logo" />;
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
