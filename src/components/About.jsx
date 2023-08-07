import classes from "./About.module.css";
import Container from "./UI/Container";
import ProfileImg from "../assets/profile-pic.jpg";

const About = () => {
  return (
    <main className={classes.about}>
      <Container className={classes["about__content"]}>
        <img src={ProfileImg} />
        <div className={classes["about__text"]}>
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero at aliquet praesent
            est scelerisque odio id libero mattis. Senectus tellus egestas est
            vestibulum faucibus pretium consectetur pharetra. Consequat velit
            donec ornare urna lacus. Pellentesque eu sed et nisi facilisi
            volutpat. Enim pharetra egestas est proin. Cursus nisl enim ut
            scelerisque viverra netus curabitur ut. Eget pharetra sed nunc
            phasellus interdum. Amet nec nec pulvinar pellentesque ultrices
            tortor ac.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default About;
