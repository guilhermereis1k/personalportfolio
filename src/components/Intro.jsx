import classes from "./Intro.module.css";
import Container from "./UI/Container";
import Header from "./header/Header";

const Intro = () => {
  return (
    <div className={classes.bg}>
      <Header />
      <main className={classes.intro}>
        <Container className={classes["intro__content"]}>
          <h1>
            Seja bem-vindo ao meu mundo digital, onde a inovação ganha vida
            através do código.
          </h1>
        </Container>
      </main>
    </div>
  );
};

export default Intro;
