import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import {
  AboutUs,
  Services,
  NotFound,
  Products,
  TicTacToe,
  Home,
  Login,
} from "./pages";
class App extends Component {
  state = {
    routes: [
      { title: "Products", path: "/products" },
      { title: "Services", path: "/services" },
      { title: "Tic-Tac-Toe", path: "/tic-tac-toe" },
      { title: "About Us", path: "/about-us" },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <>
        <NavBar routes={routes} />
        <div className='container py-5'>
          <Switch>
            <Route path='/products' component={Products} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/services' component={Services} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/tic-tac-toe' component={TicTacToe} />
            <Route path='/login' component={Login} />
            <Route path='/' exact component={Home} />
            <Redirect from='/dashboard' to='/login' />
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
