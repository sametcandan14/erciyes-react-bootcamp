import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const addProductValidation = yup.object({
  name: yup.string().required("Please enter product name"),
  unitPrice: yup.number().required("Please enter price"),
  unitsInStock: yup.number().required("Please enter stock quantity"),
  quantityPerUnit: yup.string().required("Please enter quantity per unit"),
});

function AddProduct() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductValidation),
  });

  let navigate = useNavigate();

  const add = (values) => {
    axios
      .post("https://northwind.vercel.app/api/products", values)
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <form onSubmit={handleSubmit(add)} style={{ marginLeft: "1rem" }}>
      <h1>Add Product</h1>
      <div style={{ marginBottom: "1rem" }}>
        <TextField required label="Name" {...register("name")} />
        <p style={{ color: "tomato" }}>{errors.name?.message}</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <TextField required label="Unit Price" {...register("unitPrice")} />
        <p style={{ color: "tomato" }}>{errors.unitPrice?.message}</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <TextField
          required
          label="Units in Stock"
          {...register("unitsInStock")}
        />
        <p style={{ color: "tomato" }}>{errors.unitsInStock?.message}</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <TextField
          required
          label="Quantity per Unit"
          {...register("quantityPerUnit")}
        />
        <p style={{ color: "tomato" }}>{errors.quantityPerUnit?.message}</p>
      </div>
      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
}

export default AddProduct;
