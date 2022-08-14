const Controls = ({ routes = [], pathname, push }) => {
    return routes.map(
      ({ path, title }) =>
        path !== pathname && (
          <button
            className="d-flex my-2 btn btn-dark"
            key={path}
            onClick={() => push(path)}
          >
            Go To {title} Page
          </button>
        )
    );
  };
  
  export default Controls;
