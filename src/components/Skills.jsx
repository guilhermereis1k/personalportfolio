import classes from "./Skills.module.css";
import Container from "./UI/Container.jsx";
import ReactSVG from "../assets/svg/reactSVG";
import JavaSVG from "../assets/svg/javaSVG";
import SpringSVG from "../assets/svg/springSVG";
import PostgreSQL from "../assets/svg/postgreSVG";
import MysqlSVG from "../assets/svg/mysqlSVG";
import DotNetSVG from "../assets/svg/dotNetSVG"
import CsharpSVG from "../assets/svg/csharpSVG";
import { useContext } from "react";
import { LanguageContext } from "../routes/App";

const Skills = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div id="skills" className={classes.skills}>
      <Container className={classes["skills__content"]}>
        <h2>{language == "ptBR" ? `Habilidades` : `Skills`}</h2>
        <div className={classes["skills__icons"]}>
          <div className={classes["skills__icon-box"]}>
            <DotNetSVG />
            <figcaption>.NET Core</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <CsharpSVG />
            <figcaption>C#</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <JavaSVG />
            <figcaption>Java</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <SpringSVG />
            <figcaption>Spring</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <PostgreSQL />
            <figcaption>PostgreSQL</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <MysqlSVG />
            <figcaption>MySQL</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <ReactSVG />
            <figcaption>React</figcaption>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
