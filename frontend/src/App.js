import "./App.css";
import ProductsMain from "./ProductsComponents/ProductsMain";
import SaleMain from "./SaleComponents/SaleMain";
import SideBar from "./pages/SideBar";
import NavBar from "./pages/NavBar";
import PurchaseMain from "./PurchaseComponents/PurchaseMain";
import DashBoard from "./DashBoardComponents/DashBoardMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-around">
      <NavBar />
      <SideBar />
      <div className="pt-10">
        <Routes>
          <Route exact path="/inventory" element={<ProductsMain />} />
          <Route exact path="/sales" element={<SaleMain />} />
          <Route exact path="/purchase" element={<PurchaseMain />} />
          <Route exact path="/" element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
