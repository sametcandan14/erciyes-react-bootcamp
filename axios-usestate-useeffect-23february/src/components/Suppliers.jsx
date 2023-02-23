import React from "react";
import axios from "axios";

function Suppliers({ suppliers, loading, setLoading, loadSuppliers }) {
  const deleteSupplier = (id) => {
    setLoading(true);
    axios
      .delete("https://northwind.vercel.app/api/suppliers/" + id)
      .then((res) => {
        loadSuppliers();
      });
  };

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <table className="w3-table w3-striped w3-border">
        <thead>
          <tr>
            <td>ID</td>
            <td>Company Name</td>
            <td>Contact Name</td>
            <td>Country</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {suppliers &&
            suppliers.map((supplier) => {
              return (
                <tr key={supplier.id}>
                  <td>{supplier.id}</td>
                  <td>{supplier.companyName}</td>
                  <td>{supplier.contactName}</td>
                  <td>{supplier.address.country}</td>
                  <td>
                    <button onClick={() => deleteSupplier(supplier.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;
