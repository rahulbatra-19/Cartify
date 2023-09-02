import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { Home, Page404, ProductPage } from "../pages";
import { Provider } from "react-redux"; // Import Provider

function App(props) {
  return (
    <Provider store={props.store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
