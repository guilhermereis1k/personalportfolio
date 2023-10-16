import classes from "./About.module.css";
import Container from "./UI/Container";
import ProfileImg from "../assets/profile-pic.jpg";

const About = () => {
  return (
    <main id="about" className={classes.about}>
      <Container className={classes["about__content"]}>
        <img src={ProfileImg} />
        <div className={classes["about__text"]}>
          <h2>Sobre mim</h2>
          <p>
            Iniciei minha trajetória na área de desenvolvimento em 2015, assim
            que ingressei no ensino médio. Optei por fazer um curso técnico
            voltado para o desenvolvimento web, que se estendeu até 2017. A
            partir desse ponto, tomei a decisão de seguir uma carreira em design
            gráfico e trabalhei nessa área por mais de um ano. Recentemente,
            mudei meu foco e estou completamente comprometido com o
            desenvolvimento, com ênfase na área de back-end. Desde o ano
            passado, tenho me dedicado a aprimorar minhas habilidades e estou
            atualmente em busca de oportunidades para trabalhar e progredir
            nessa área.
          </p>
          <h3>Soft skills</h3>
          <ul className={classes["about__list"]}>
            <li>Comunicativo</li>
            <li>Atencioso</li>
            <li>Proativo</li>
            <li>Curioso</li>
            <li>Aprendizado rápido</li>
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default About;
