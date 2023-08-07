import classes from "./Contact.module.css";
import Container from "./UI/Container";

const Contact = () => {
  return (
    <main className={classes.contact}>
      <Container className={classes["contact__content"]}>
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
    </main>
  );
};

export default Contact;
