import classes from "./Contact.module.css";
import Container from "./UI/Container";
import Footer from "./footer/Footer";

const contactClasses = classes["contact__content"] + classes.contact;

const Contact = () => {
  return (
    <div className={classes.bg}>
      <Container
        className={`${classes["contact__content"]} ${classes.contact}`}
      >
        <h2>Contato</h2>
        <div className={classes["contact__form"]}>
          <form action="">
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>ENVIAR</button>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
