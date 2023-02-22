import React from "react";
import { products } from "./apiData";

function ProductsTable() {
  return (
    <div>
      <table className="w3-table w3-striped w3-border">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            if (product.unitsInStock != 0) {
              return (
                <tr
                  key={product.id}
                  style={
                    product.unitPrice > 20 ? { backgroundColor: "red" } : {}
                  }
                >
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.unitsInStock}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
