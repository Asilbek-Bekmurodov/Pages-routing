import Controls from "../components/controls";
const Products = ({ history, routes, location }) => {
  return (
    <div>
      <h1>Products Page</h1>
      <Controls
        routes={routes}
        pathname={location.pathname}
        push={history.push}
      />
    </div>
  );
};

export default Products;
