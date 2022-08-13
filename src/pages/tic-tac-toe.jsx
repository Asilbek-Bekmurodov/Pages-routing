import { useRef, useState } from "react";
import Cell from "../cell";
import Controls from "../components/controls";
import classes from "../main.module.scss";

const TicTacToe = ({ routes, history, location }) => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const gamer = useRef("X");

  const handleSelect = (idx) => {
    const newBoard = [...board];
    newBoard[idx] = gamer.current;
    gamer.current = gamer.current === "X" ? "O" : "X";
    setBoard(newBoard);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes["game-zone"]}>
          {board.map((value, idx) => (
            <Cell key={idx} value={value} onSelect={() => handleSelect(idx)} />
          ))}
        </div>
      </div>
      <Controls
        routes={routes}
        pathname={location.pathname}
        push={history.push}
      />
    </div>
  );
};

export default TicTacToe;
