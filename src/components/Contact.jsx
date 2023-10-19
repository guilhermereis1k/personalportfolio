import classes from "./Contact.module.css";
import Container from "./UI/Container";
import Footer from "./footer/Footer";
import { useContext } from "react";
import { LanguageContext } from "../routes/App";
import { useState } from "react";

const contactClasses = classes["contact__content"] + classes.contact;

const Contact = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [sent, setSent] = useState(false);

  const CompleteName = language == "ptBR" ? `Nome completo` : `Full name`;

  return (
    <div id="contact" className={classes.bg}>
      <Container
        className={`${classes["contact__content"]} ${classes.contact}`}
      >
        <h2>{language == "ptBR" ? `Contato` : `Contact`}</h2>
        <div className={classes["contact__form"]}>
          <form
            action="https://formsubmit.co/a75f873cebe771741e8aad551bc28677"
            method="POST"
          >
            {sent && <h3 style={{ textAlign: "center" }}>{messageSuccess}</h3>}
            <input
              type="text"
              placeholder={language == "ptBR" ? `Nome completo` : `Full name`}
              name="name"
              required
            />
            <input type="email" placeholder="Email" name="email" required />
            <textarea
              name="text"
              placeholder={
                language == "ptBR" ? `Texto da mensagem...` : `Message text...`
              }
              id="text"
              cols="30"
              rows="10"
            ></textarea>

            <button type="submit">
              {language == "ptBR" ? `ENVIAR` : `SEND`}
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
