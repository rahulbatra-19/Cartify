import React from "react";
import { fetchProducts } from "../actions";
import ProductCard from "./ProductCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(fetchProducts());
    console.log("State", this.props.store.getState());
  }
  render() {
    const { products } = this.props.store.getState();
    return (
      <div className="App">
        <h1>hii</h1>
        {products.map((product, index) => (
          <ProductCard product={product} key={`product-${index}`} />
        ))}
      </div>
    );
  }
}

export default App;
