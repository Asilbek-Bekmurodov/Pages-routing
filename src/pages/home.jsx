import Controls from "../components/controls";

const Home = ({ routes, location, history }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Controls
        routes={routes}
        pathname={location.pathname}
        push={history.push}
      />
    </div>
  );
};

export default Home;
