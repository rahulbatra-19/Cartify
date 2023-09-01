import React from "react";
import { fetchProducts } from "../actions";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

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
        <Navbar />
        <ul role="list" className="ml-60 w-2/3 ">
          {products.map((product, index) => (
            <ProductCard product={product} key={`product-${index}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
