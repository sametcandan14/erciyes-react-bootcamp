import axios from "axios";
import React, { useState } from "react";

function PostSupplier({ setLoading, loadSuppliers }) {
  const [companyName, setcompanyName] = useState("");
  const [contactName, setcontactName] = useState("");
  const [country, setCountry] = useState("");

  const addSupplier = () => {
    setLoading(true);
    let newSupplier = {
      companyName: companyName,
      contactName: contactName,
      address: {
        country: country,
      },
    };

    axios
      .post("https://northwind.vercel.app/api/suppliers", newSupplier)
      .then((res) => loadSuppliers());

    setCountry("");
    setcompanyName("");
    setcontactName("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setcompanyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contactName">Contact Name</label>
        <input
          type="text"
          id="contactName"
          value={contactName}
          onChange={(e) => setcontactName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <button style={{ marginBottom: "10px" }} onClick={addSupplier}>
          Add Supplier
        </button>
      </div>
    </div>
  );
}

export default PostSupplier;
