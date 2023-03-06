import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DataGridProducts() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setDeleteId] = useState(0);

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setProducts(res.data));
    setLoading(false);
  };

  const deleteProduct = (id) => {
    handleClose();
    setLoading(true);
    axios
      .delete("https://northwind.vercel.app/api/products/" + id)
      .then((res) => {
        loadData();
      });
  };

  let columns = [
    {
      headerName: "id",
      field: "id",
      flex: 0.3,
    },
    {
      headerName: "Name",
      field: "name",
      flex: 1,
    },
    {
      headerName: "Unit Price",
      field: "unitPrice",
      flex: 1,
    },
    {
      headerName: "Units in Stock",
      field: "unitsInStock",
      flex: 1,
    },
    {
      headerName: "Quantity Per Unit",
      field: "quantityPerUnit",
      flex: 1,
    },
    {
      headerName: "Delete Product",
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="outlined"
              onClick={() => handleClickOpen(params.row.id)}
            >
              Delete Product
            </Button>
          </>
        );
      },
      flex: 1,
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={20}
        loading={loading}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The product will be deleted. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(e) => deleteProduct(id)}
            autoFocus
            variant="contained"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DataGridProducts;
