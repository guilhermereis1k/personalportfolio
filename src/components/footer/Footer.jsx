import Container from "../UI/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes["footer__content"]}>
        <p>2023 - Desenvolvido por Guilherme Reis</p>
      </Container>
    </footer>
  );
};

export default Footer;
