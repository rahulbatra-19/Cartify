import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { Home, Page404 } from "../pages";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home store={props.store} />}></Route>
        {/* <Route path="/product/:id" element={<UserInfo ></Route> */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}
export default App;
