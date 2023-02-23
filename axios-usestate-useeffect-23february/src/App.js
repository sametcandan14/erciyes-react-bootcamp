import "./App.css";
import { useState, useEffect } from "react";
import PostSupplier from "./components/PostSupplier";
import Suppliers from "./components/Suppliers";
import axios from "axios";

function App() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = () => {
    axios
      .get("https://northwind.vercel.app/api/suppliers")
      .then((res) => setSuppliers(res.data));
    setLoading(false);
  };

  return (
    <div className="App">
      <PostSupplier setLoading={setLoading} loadSuppliers={loadSuppliers} />
      <br /> <br />
      <Suppliers
        setLoading={setLoading}
        suppliers={suppliers}
        loading={loading}
        loadSuppliers={loadSuppliers}
      />
    </div>
  );
}

export default App;
