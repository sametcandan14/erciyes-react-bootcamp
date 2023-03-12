import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  const [categoryEdit, setcategoryEdit] = useState({
    name: "",
    description: "",
  });
  const [loading, setloading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories/" + id)
      .then((res) => {
        setcategoryEdit(res.data);
        setloading(false);
      });
  }, []);

  const handleEdit = (e) => {
    setcategoryEdit({ ...categoryEdit, [e.target.name]: e.target.value });
  };

  const handleCategoryUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://northwind.vercel.app/api/categories/" + id, categoryEdit)
      .then((res) => {
        navigate("/categories");
      });
  };

  return (
    <>
      <Spin tip="Loading..." spinning={loading}>
        <h1>Update Category</h1>
        <h1>Id: {categoryEdit.id} </h1>
        <form onSubmit={handleCategoryUpdate}>
          <label htmlFor="name">Name: </label>{" "}
          <input
            type="text"
            name="name"
            value={categoryEdit.name}
            onChange={(e) => handleEdit(e)}
          />{" "}
          <br />
          <label htmlFor="description">Description: </label>{" "}
          <input
            type="text"
            name="description"
            style={{ width: "60%" }}
            value={categoryEdit.description}
            onChange={(e) => handleEdit(e)}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      </Spin>
    </>
  );
}

export default Update;
