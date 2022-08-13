import Controls from "../components/controls";

const Services = ({ history, location, routes}) => {
  return (
    <div>
      <h1>Services Page</h1>
      <Controls
        routes={routes}
        pathname={location.pathname}
        push={history.push}
      />
    </div>
  );
};

export default Services;
