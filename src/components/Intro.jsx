import classes from "./Intro.module.css";
import Container from "./UI/Container";

const Intro = () => {
  return (
    <main className={classes.intro}>
      <Container className={classes["intro__content"]}>
        <h1>
          Seja bem-vindo ao meu mundo digital, onde a inovação ganha vida
          através do código.
        </h1>
      </Container>
    </main>
  );
};

export default Intro;
