import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Home, Page404, ProductPage, CartPage, PaymentGetaway } from "../pages";
import { Provider } from "react-redux"; // Import Provider
import AddProductForm from "../pages/AddProductForm";

function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <Provider store={props.store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/addProduct" element={<AddProductForm />} />
          <Route path="payment" element={<PaymentGetaway />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
