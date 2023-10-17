import classes from "./Portfolio.module.css";
import Container from "./UI/Container";
import WebServiceImg from "../assets/ws.png";
import PaperRockScissorsImg from "../assets/pprs.png";
import MeetTheRichImg from "../assets/mtr.png";
import RevistaSeareiroAssinaturaImg from "../assets/rs.png";
import SagradoBetelImg from "../assets/sbem.png";
import PortfolioImg from "../assets/portfolio.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div id="portfolio" className={classes.portfolio}>
      <Container className={classes["portfolio__content"]}>
        <h2>Portfólio</h2>
        <div className={classes["portfolio__projects"]}>
          <Link
            style={{ textDecoration: "none" }}
            to="https://github.com/guilhermereis1k/MeetTheRich-spring-react"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${MeetTheRichImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                Meet The Rich
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>ACESSAR PROJETO</h1>
              </div>

              <div className={classes["portfolio__item--desc"]}>
                <p>Spring, React & PostgreSQL</p>
                <h3>Fullstack</h3>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="https://github.com/guilhermereis1k/webservice-jpa-spring"
          >
            <div className={classes["portfolio__item"]}>
              <img src={`${WebServiceImg}`} alt="" />
              <h1 className={classes["portfolio__item--title"]}>
                Spring WebService
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>ACESSAR PROJETO</h1>
              </div>
              <div className={classes["portfolio__item--desc"]}>
                <p>Spring (Java) & MySQL</p>
                <h3>Back end</h3>
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
                <h1>ACESSAR PROJETO</h1>
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
                Assinatura Revista Seareiro
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>ACESSAR SITE</h1>
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
                Sagrado Betel Emergência Médicas
              </h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>ACESSAR SITE</h1>
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
              <h1 className={classes["portfolio__item--title"]}>Portfólio</h1>
              <div className={classes["portfolio__item--link"]}>
                <h1>ACESSAR PROJETO</h1>
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
