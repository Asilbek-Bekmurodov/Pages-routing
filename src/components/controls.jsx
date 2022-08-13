function Controls({ routes = [], pathname, push }) {
  return routes.map(
    ({ title, path }) =>
      path !== pathname && (
        <button
          className="d-flex my-2 btn btn-dark"
          key={path}
          onClick={() => push(path)}
        >
          Go to {title} Page
        </button>
      )
  );
}

export default Controls;
