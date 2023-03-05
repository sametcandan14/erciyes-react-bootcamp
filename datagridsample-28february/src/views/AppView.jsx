import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DataGridProducts from "../components/DataGridProducts";
import AddProduct from "../components/AddProduct";
import NotFound from "../components/NotFound";

function AppView() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "5rem",
        }}
      >
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/addProduct">Add Product</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<DataGridProducts />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default AppView;
