import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.nav}>
      <li>Sobre mim</li>
      <li>Habilidades</li>
      <li>Portfólio</li>
      <li>Contato</li>
    </ul>
  );
};

export default Navigation;
