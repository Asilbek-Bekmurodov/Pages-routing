import Controls from "../components/controls";

const Home = ({location, history, routes}) => {
    return (
      <div>
        <h1>Home page</h1>
        <Controls 
            pathname={location.pathname}
            push={history.push}
            routes = {routes}
        />
      </div>
    );
  };
  
  export default Home;