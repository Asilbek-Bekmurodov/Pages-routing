import { Link } from "react-router-dom";

const Navbar = ({ routes = [] }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/home"}>
            React Router Dom
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map(
                ({ title, path }) =>
                  path !== "/home" && (
                    <li key={path} className="nav-item">
                      <Link
                        className="nav-link "
                        to={path}
                        children={title}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
