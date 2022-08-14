import Controls from "../components/controls";

const TicTacToe = ({ routes, location, history }) => {
  return (
    <div>
      <h1>TicTacToe page</h1>
      <Controls
        routes={routes}
        push={history.push}
        pathname={location.pathname}
      />
    </div>
  );
};

export default TicTacToe;
