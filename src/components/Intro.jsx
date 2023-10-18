import classes from "./Intro.module.css";
import Container from "./UI/Container";
import Header from "./header/Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../routes/App";

const Intro = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={classes.bg} id="intro">
      <Header />
      <main className={classes.intro}>
        <Container className={classes["intro__content"]}>
          <h1>
            {language == "ptBR"
              ? `Designer e desenvolvedor apaixonado por tornar ideias reais.`
              : `Designer and developer passionate about making ideas real.`}
          </h1>
          <div className={classes["intro__button-flex"]}>
            <Link
              style={{ textDecoration: "none" }}
              to="https://github.com/guilhermereis1k"
            >
              <button className={classes["intro__button"]}>Github</button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="https://www.linkedin.com/in/guilhermereis1/"
            >
              <button className={classes["intro__button"]}>Linkedin</button>
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Intro;
