import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import { AboutUs, Home, Products, Services, TicTacToe } from "./pages";

export class App extends Component {
  state = {
    routes: [
      { title: "Home", path: "/home", component: Home },
      { title: "About-us", path: "/about-us", component: AboutUs },
      { title: "Services", path: "/services", component: Services },
      { title: "Tic Tac Toe", path: "/tic-tac-toe", component: TicTacToe },
      { title: "Products", path: "/product", component: Products },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <>
        <Navbar routes={this.state.routes} />
        <div className="container py-5">
          <Switch>
            {routes.map(({ path, component: Page }) => (
              <Route
                key={path}
                path={path}
                render={(props) => <Page {...props} routes={routes} />}
              />
            ))}
            <Redirect to={'/home'}/>
          </Switch>
        </div>
      </>
    );
  }
}
export default App;
