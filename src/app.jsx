import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import {
  AboutUs,
  Services,
  Products,
  TicTacToe,
  Home,
} from "./pages";
class App extends Component {
  state = {
    routes: [
      { title: "Products", path: "/products", component: Products },
      { title: "Services", path: "/services", component: Services },
      { title: "Tic-Tac-Toe", path: "/tic-tac-toe", component: TicTacToe },
      { title: "About Us", path: "/about-us", component: AboutUs },
      { title: "Home", path: "/home", component: Home },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <>
        <NavBar routes={routes} />
        <div className="container py-5">
          <Switch>
            {routes.map(({ path, component: Page }) => (
              <Route
                key={path}
                path={path}
                render={(props) => <Page {...props} routes={routes} />}
              />
            ))}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
