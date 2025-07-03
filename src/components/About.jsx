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
              ? `Tenho contato com programação desde 2015, quando fiz um curso técnico. Desde então, me formei e atuei como designer, sempre mantendo a programação presente. Em 2021, retomei os estudos de forma ativa e atualmente curso Análise e Desenvolvimento de Sistemas na Fatec Zona Sul. Trabalho com projetos em .NET Core, Spring, MySQL e Postgres, e tenho experiências profissionais com HTML, CSS, JavaScript e React.`
              : `I’ve been involved with programming since 2015, when I took a technical course. Since then, I’ve graduated and worked as a designer, always programming at some level. In 2021, I resumed studying development actively, and I’m currently pursuing a degree in Systems Analysis and Development at Fatec Zona Sul. Currently, I work on projects using .NET Core, Spring, MySQL, and Postgres, and I also have professional experience with HTML, CSS, JavaScript, and React.`}
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
