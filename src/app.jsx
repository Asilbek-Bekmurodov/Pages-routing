import { Component } from "react";
import NavBar from "./components/navbar";
import { AboutUs, Services, Products, TicTacToe, Home } from "./pages";
class App extends Component {
  state = {
    routes: [
      { title: "Products", path: "/products" },
      { title: "Services", path: "/services" },
      { title: "Tic-Tac-Toe", path: "/tic-tac-toe" },
      { title: "About Us", path: "/about-us" },
    ],
    pathname: window.location.pathname,
  };

  getPage = () => {
    const { pathname, routes } = this.state;
    const children = JSON.stringify(
      routes.filter(({ path }) => path !== pathname),
      null,
      4
    );
    switch (pathname) {
      case "/products":
        return <Products children={children} />;
      case "/services":
        return <Services children={children} />;
      case "/tic-tac-toe":
        return <TicTacToe children={children} />;
      case "/about-us":
        return <AboutUs children={children} />;
      default:
        return <Home children={children} />;
    }
  };

  handleRoute = (pathname) => {
    window.history.pushState("data", pathname.toUpperCase(), pathname);
    this.setState({ pathname });
  };

  render() {
    const { routes, pathname } = this.state;
    return (
      <>
        <NavBar
          pathname={pathname}
          routes={routes}
          onRoute={this.handleRoute}
        />
        <div className='container py-5'>{this.getPage()}</div>
      </>
    );
  }
}

export default App;
