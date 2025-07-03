import classes from "./Intro.module.css";
import Container from "./UI/Container.jsx";
import Header from "./header/Header.jsx";
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
              ? `Desenvolvedor em formação com foco em back-end e tecnologias modernas como Java, .NET Core e Spring.`
              : `Back-end-focused developer in training, working with modern technologies like Java, .NET Core, and Spring.`}
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
