import React from "react";
import { fetchProducts } from "../actions";

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
        {products.map((product, index) => (
          <div>{product.title}</div>
        ))}
      </div>
    );
  }
}

export default App;
