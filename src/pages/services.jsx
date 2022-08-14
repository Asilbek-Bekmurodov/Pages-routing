import Controls from "../components/controls";

const Services = ({ routes, location, history }) => {
  return (
    <>
      <h1>Services Page</h1>
      <Controls
        routes={routes}
        push={history.push}
        pathname={location.pathname}
      />
    </>
  );
};

export default Services;
