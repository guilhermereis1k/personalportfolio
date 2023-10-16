import classes from "./Intro.module.css";
import Container from "./UI/Container";
import Header from "./header/Header";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className={classes.bg} id="intro">
      <Header />
      <main className={classes.intro}>
        <Container className={classes["intro__content"]}>
          <h1>Designer e desenvolvedor apaixonado por tornar ideias reais.</h1>
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
        </Container>
      </main>
    </div>
  );
};

export default Intro;
