import { Button, Table, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { confirm } = Modal;

function List() {
  let navigate = useNavigate();

  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);

  const deleteCategory = (id) => {
    confirm({
      title: "Do you Want to delete this item?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        setloading(true);
        axios
          .delete(`https://northwind.vercel.app/api/categories/${id}`)
          .then((res) => {
            loadTable();
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    axios.get("https://northwind.vercel.app/api/categories").then((res) => {
      console.log("RES", res.data);
      setcategories(res.data);
      setloading(false);
    });
  };

  const goToDetail = (id) => {
    navigate("/category/detail/" + id);
  };

  const goToUpdate = (id) => {
    navigate("/category/update/" + id);
  };

  let columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Detail",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => goToDetail(id)} type="primary" ghost>
          Detail
        </Button>
      ),
    },
    {
      title: "Update",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => goToUpdate(id)} type="primary" ghost>
          Update
        </Button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => deleteCategory(id)} type="primary" ghost danger>
          Delete
        </Button>
      ),
    },
  ];

  const goToNewCategory = () => {
    navigate("/category/add");
  };

  return (
    <>
      <Button type="primary" onClick={goToNewCategory}>
        Add New Category
      </Button>
      <Table columns={columns} dataSource={categories} loading={loading} />
    </>
  );
}

export default List;
