import classes from "./main.module.scss";

const Cell = ({ value, onSelect }) => {
  return (
    <div className={classes.cell} onClick={!value ? onSelect : () => {}}>
      {value}
    </div>
  );
};

export default Cell;
