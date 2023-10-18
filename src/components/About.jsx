import classes from "./About.module.css";
import Container from "./UI/Container";
import ProfileImg from "../assets/profile-pic.jpg";
import { LanguageContext } from "../routes/App";
import { useContext } from "react";

const About = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <main id="about" className={classes.about}>
      <Container className={classes["about__content"]}>
        <img src={ProfileImg} />
        <div className={classes["about__text"]}>
          <h2>{language == "ptBR" ? `Sobre mim` : `About me`}</h2>
          <p>
            {language == "ptBR"
              ? `Iniciei minha trajetória na área de desenvolvimento em 2015, assim
            que ingressei no ensino médio. Optei por fazer um curso técnico
            voltado para o desenvolvimento web, que se estendeu até 2017. A
            partir desse ponto, tomei a decisão de seguir uma carreira em design
            gráfico e trabalhei nessa área por mais de um ano. Recentemente,
            mudei meu foco e estou completamente comprometido com o
            desenvolvimento, com ênfase na área de back-end. Desde o ano
            passado, tenho me dedicado a aprimorar minhas habilidades e estou
            atualmente em busca de oportunidades para trabalhar e progredir
            nessa área.`
              : `I started my journey in the development field in 2015, right when I entered high school. I chose to pursue a technical course focused on web development, which lasted until 2017. From that point on, I made the decision to pursue a career in graphic design and worked in that field for over a year. Recently, I shifted my focus and am now fully committed to development, with an emphasis on the back-end. Since last year, I have been dedicated to improving my skills, and I am currently seeking opportunities to work and progress in this area.`}
          </p>
          <h3>Soft skills</h3>
          <ul className={classes["about__list"]}>
            <li>{language == "ptBR" ? `Comunicativo` : `Communicative`}</li>
            <li>{language == "ptBR" ? `Atencioso` : `Attentive`}</li>
            <li>{language == "ptBR" ? `Proativo` : `Proactive`}</li>
            <li>{language == "ptBR" ? `Curioso` : `Curious`}</li>
            <li>
              {language == "ptBR" ? `Aprendizado rápido` : `Fast Learning`}
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default About;
