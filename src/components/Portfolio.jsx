import classes from "./Portfolio.module.css";
import Container from "./UI/Container";

const Portfolio = () => {
  return (
    <main className={classes.portfolio}>
      <Container className={classes["portfolio__content"]}>
        <h2>Portfólio</h2>
        <div className={classes["portfolio__projects"]}>
          <div className={classes["portfolio__item"]}>
            <p>Projeto 1</p>
          </div>
          <div className={classes["portfolio__item"]}>
            <p>Projeto 2</p>
          </div>
          <div className={classes["portfolio__item"]}>
            <p>Projeto 3</p>
          </div>
          <div className={classes["portfolio__item"]}>
            <p>Projeto 4</p>
          </div>
          <div className={classes["portfolio__item"]}>
            <p>Projeto 5</p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Portfolio;
