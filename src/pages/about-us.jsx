import Controls from "../components/controls";

const AboutUs = ({ routes, history, location }) => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Controls
        routes={routes}
        pathname={location.pathname}
        push={history.push}
      />
    </div>
  );
};

export default AboutUs;
