import classes from "./About.module.css";
import Container from "./UI/Container.jsx";
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
              ? ` Tenho contato com a programação desde 2015 quando fiz um curso técnico, desde esse tempo já me formei e trabalhei como designer, sempre programando em algum nível. Em 2021, comecei a estudar desenvolvimento ativamente, no momento estou cursando Análise e Desenvolvimento de Sistemas na Fatec Zona Sul. Atualmente, mexo principalmente com Java, Spring, SQL, Postgres e já tive contato e experiências com HTML, CSS, Javascript e ReactJS.`
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
