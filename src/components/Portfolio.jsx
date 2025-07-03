import classes from "./Portfolio.module.css";
import Container from "./UI/Container.jsx";
import ZSRestaurantePhoto from "../assets/zs.png";
import PaperRockScissorsImg from "../assets/pprs.png";
import MeetTheRichImg from "../assets/mtr.png";
import RevistaSeareiroAssinaturaImg from "../assets/rs.png";
import SagradoBetelImg from "../assets/sbem.png";
import PortfolioImg from "../assets/portfolio.png";
import OscarCinemaPhoto from "../assets/oc.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../routes/App";

const Portfolio = () => {
  const [hovering, setHovering] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div id="portfolio" className={classes.portfolio}>
      <Container className={classes["portfolio__content"]}>
        <h2>{language == "ptBR" ? `Portfólio` : `Portfolio`}</h2>
        <div className={classes["portfolio__projects"]}>
          <Link style={{ textDecoration: "none" }} to="#">
            <div className={classes["portfolio__item"]}>
              <img src={`${MeetTheRichImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                Meet The Rich
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>

              <div className={classes["portfolio__item--desc"]}>
                <p>Spring, React & PostgreSQL</p>
                <h3>Fullstack</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="https://github.com/guilhermereis1k/ZSRestaurante"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${ZSRestaurantePhoto}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                ZS Restaurante
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>Spring, React & H2</p>
                <h3>Fullstack</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="https://github.com/guilhermereis1k/OscarCinemaSpring"
          >
          <div className={classes["portfolio__item"]}>
              <img src={`${OscarCinemaPhoto}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                {language == "ptBR" ? `Oscar Cinema` : `Oscar Cinema`}
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language === "ptBR" ? "ACESSAR PROJETO" : "ACCESS PROJECT"}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>Spring, React & PostgreSQL</p>
                <h3>Fullstack</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="https://guilhermereis1k.github.io/PaperRockScissorsgame/"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${PaperRockScissorsImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                Paper Rock Scissors Game
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>React</p>
                <h3>Front end</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="https://www.searabendita.org.br/seararevistas-assinatura/index.php"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${RevistaSeareiroAssinaturaImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                {language == "ptBR"
                  ? `Assinatura Revista Seareiro`
                  : `Seareiro Magazine Signature`}
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>HTML/CSS/JS & Figma</p>
                <h3>UI/UX & Front end</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="http://www.sagradoemergenciamedicas.com.br"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${SagradoBetelImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                {language == "ptBR"
                  ? `Sagrado Betel Emergência Médicas`
                  : `Sagrado Betel Medical Emergency`}
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>HTML/CSS/JS & Figma</p>
                <h3>UI/UX & Front end</h3>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#">
            <div className={classes["portfolio__item"]}>
              <img src={`${PortfolioImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                {language == "ptBR" ? `Portfólio` : `Portfolio`}
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>
                  {language == "ptBR" ? `ACESSAR PROJETO` : `ACCESS PROJECT`}
                </h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>React</p>
                <h3>Front end</h3>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
