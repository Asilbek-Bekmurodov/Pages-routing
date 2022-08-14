import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import { AboutUs, Home, Products, Services, TicTacToe } from "./pages";

export class App extends Component {
  state = {
    routes: [
      { title: "Home", pathname: "/home", component: Home },
      { title: "About-us", pathname: "/about-us", component: AboutUs },
      { title: "Services", pathname: "/services", component: Services },
      { title: "Tic Tac Toe", pathname: "/tic-tac-toe", component: TicTacToe },
      { title: "Products", pathname: "/product", component: Products },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <>
        <Navbar routes={this.state.routes} />
        <div className="container py-5">
          <Switch>
            {routes.map(({ pathname, component: Page }) => (
              <Route
                key={pathname}
                path={pathname}
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
