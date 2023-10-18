import classes from "./Container.module.css";

const Container = (props) => {
  const otherClasses = props.className;

  return (
    <div className={`${classes.container} ${otherClasses}`}>
      {props.children}
    </div>
  );
};

export default Container;
