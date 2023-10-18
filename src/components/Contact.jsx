import classes from "./Contact.module.css";
import Container from "./UI/Container";
import Footer from "./Footer/Footer";
import { useContext } from "react";
import { LanguageContext } from "../routes/App";

const contactClasses = classes["contact__content"] + classes.contact;

const Contact = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const CompleteName = language == "ptBR" ? `Nome completo` : `Full name`;

  return (
    <div id="contact" className={classes.bg}>
      <Container
        className={`${classes["contact__content"]} ${classes.contact}`}
      >
        <h2>{language == "ptBR" ? `Contato` : `Contact`}</h2>
        <div className={classes["contact__form"]}>
          <form
            action="https://formsubmit.co/a75f873cebe771741e8aad551bc28677 "
            method="POST"
          >
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
