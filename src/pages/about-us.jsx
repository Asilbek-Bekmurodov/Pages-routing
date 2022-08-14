import Controls from "../components/controls";

const AboutUs = ({history, routes, location}) => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Controls
        pathname={location.pathname}
        push={history.push}
        routes={routes}
      />
    </div>
  );
};

export default AboutUs;
