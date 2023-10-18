import Container from "../UI/Container";
import classes from "./Footer.module.css";
import { LanguageContext } from "../../routes/App";
import { useContext } from "react";

const Footer = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <footer className={classes.footer}>
      <Container className={classes["footer__content"]}>
        <p>
          {language == "ptBR"
            ? `2023 - Desenvolvido por Guilherme Reis`
            : `2023 - Developed by Guilherme Reis`}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
