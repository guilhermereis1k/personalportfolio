import classes from "./Skills.module.css";
import Container from "./UI/Container";
import HtmlSVG from "../assets/svg/htmlSvg";
import CssSVG from "../assets/svg/cssSVG";
import JavascriptSVG from "../assets/svg/javascriptSVG";
import TypescriptSVG from "../assets/svg/typescriptSVG";
import ReactSVG from "../assets/svg/reactSVG";
import SassSVG from "../assets/svg/sassSVG";
import BootstrapSVG from "../assets/svg/bootstrapSVG";
import JavaSVG from "../assets/svg/javaSVG";
import SpringSVG from "../assets/svg/springSVG";
import PostgreSQL from "../assets/svg/postgreSVG";
import MysqlSVG from "../assets/svg/mysqlSVG";
import { useContext } from "react";
import { LanguageContext } from "../routes/App";

const Skills = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div id="skills" className={classes.skills}>
      <Container className={classes["skills__content"]}>
        <h2>{language == "ptBR" ? `Habilidade` : `Skills`}</h2>
        <div className={classes["skills__icons"]}>
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
            <figcaption>ReactJS</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <HtmlSVG />
            <figcaption>HTML5</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <CssSVG />
            <figcaption>CSS3</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <JavascriptSVG />
            <figcaption>Javascript</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <SassSVG />
            <figcaption>Sass</figcaption>
          </div>
          <div className={classes["skills__icon-box"]}>
            <BootstrapSVG />
            <figcaption>Bootstrap</figcaption>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
