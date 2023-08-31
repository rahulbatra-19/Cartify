import React from "react";

class App extends React.Component {
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
    return <div className="App"></div>;
  }
}

export default App;
