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

  const handleClickOpen = () => {
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

  const deleteProduct = (item) => {
    handleClose();
    setLoading(true);
    axios
      .delete("https://northwind.vercel.app/api/products/" + item.id)
      .then((res) => {
        loadData();
      });
  };

  let columns = [
    {
      headerName: "ID",
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
      renderCell: (item) => {
        return (
          <>
            <Button variant="outlined" onClick={handleClickOpen}>
              Delete Product
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The product will be deleted. Are you sure?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => deleteProduct(item)} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
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
    </div>
  );
}

export default DataGridProducts;
