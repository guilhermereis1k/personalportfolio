import classes from "./Contact.module.css";
import Container from "./UI/Container";
import Footer from "./footer/Footer";

const contactClasses = classes["contact__content"] + classes.contact;

const Contact = () => {
  return (
    <div id="contact" className={classes.bg}>
      <Container
        className={`${classes["contact__content"]} ${classes.contact}`}
      >
        <h2>Contato</h2>
        <div className={classes["contact__form"]}>
          <form
            action="https://formsubmit.co/a75f873cebe771741e8aad551bc28677 "
            method="POST"
          >
            <input
              type="text"
              placeholder="Nome completo"
              name="name"
              required
            />
            <input type="email" placeholder="Email" name="email" required />
            <textarea
              name="text"
              placeholder="Texto da mensagem..."
              id="text"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
