/* 1) Ekrana 4 input konulacak ( companyName, contactName ...) ve bir post işlemi 
yapılacak ( axios veya fetch ) yeni bir supplier eklenecek */

const submitWithFetch = () => {
  let companyName = document.querySelector("#companyName").value;
  let contactName = document.querySelector("#contactName").value;
  let city = document.querySelector("#city").value;
  let country = document.querySelector("#country").value;

  let newSupplier = {
    companyName: companyName,
    contactName: contactName,

    address: {
      city: city,

      country: country,
    },
  };

  fetch("https://northwind.vercel.app/api/suppliers", {
    method: "POST",
    body: JSON.stringify(newSupplier),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data ", data);
    });
};

const submitWithAxios = () => {
  let companyName = document.querySelector("#companyNameAx").value;
  let contactName = document.querySelector("#contactNameAx").value;
  let city = document.querySelector("#cityAx").value;
  let country = document.querySelector("#countryAx").value;

  let newSupplier = {
    companyName: companyName,
    contactName: contactName,

    address: {
      city: city,

      country: country,
    },
  };

  axios
    .post("https://northwind.vercel.app/api/suppliers", newSupplier)
    .then((res) => {
      console.log("Response ", res);
      alert("Success!");
    })
    .catch((err) => console.log("failed", err));
};

// get companies
// 2) ul içerinde companyName ler gösterilecek

const getCompanies = () => {
  document.querySelector("#companyList").innerHTML = "";

  axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
    let suppliers = res.data;

    suppliers.map((supplier) => {
      let liElement = `<li>${supplier.companyName}</li>`;

      document
        .querySelector("#companyList")
        .insertAdjacentHTML("beforeend", liElement);
    });
  });
};

/* 3) Ekrana bir input bir buton koy. 
Butona tıkladığında inputtan aldığı id ye uygun supplier ı silsin! */

const deleteSupplierById = () => {
  let id = document.querySelector("#supplierId").value;

  fetch("https://northwind.vercel.app/api/suppliers/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Supplier Successfully Deleted");
    });

  document.querySelector("#supplierId").value = "";
};
