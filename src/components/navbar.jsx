const NavBar = ({ routes = [], onRoute, pathname }) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <span className='navbar-brand' onClick={() => onRoute("/")}>
          React Route
        </span>

        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
          {routes.map(({ title, path }) => (
            <li key={path} className='nav-item'>
              <span
                className={`nav-link ${pathname === path ? "active" : ""}`}
                onClick={() => onRoute(path)}
                children={title}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
