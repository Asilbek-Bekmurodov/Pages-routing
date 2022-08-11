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
    switch (this.state.pathname) {
      case "/products":
        return <Products />;
      case "/services":
        return <Services />;
      case "/tic-tac-toe":
        return <TicTacToe />;
      case "/about-us":
        return <AboutUs />;
      default:
        return <Home />;
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
