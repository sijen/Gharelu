import { useState, useEffect } from "react";

import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Property() {
  const columns = [
    { title: "PropertyID", field: "PropertyID" },
    { title: "PropID", field: "PropID" },
    { title: "Title", field: "Title" },
    { title: "Slug", field: "Slug" },
    { title: "Address", field: "Address" },
    // { title: "DistrictID", field: "DistrictID" },
    // { title: "District", field: "District" },
    // { title: "State", field: "State" },
    // { title: "Price", field: "Price" },
    // { title: "PricePer", field: "PricePer" },
    // { title: "Area", field: "Area" },
    // { title: "AreaUnit", field: "AreaUnit" },
    // { title: "PricePer", field: "PricePer" },
    // { title: "Area", field: "Area" },
    // { title: "AreaUnit", field: "AreaUnit" },
    // { title: "Purpose", field: "Purpose" },
    // { title: "Type", field: "Type" },
    // { title: "Category", field: "Category" },
    // { title: "Image", field: "Image" },
    // { title: "Contact", field: "Contact" },
    // { title: "Rating", field: "Rating" },
    // { title: "Attachment", field: "Attachment" },
    // { title: "UserImage", field: "UserImage" },
    // { title: "UserFullName", field: "UserFullName" },
    // { title: "CreatedDate", field: "CreatedDate" },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch(
      "https://esnep.com/gharelukam/api/search-property?Purpose=-1&Keyword=a&Address=&City=&State=-1&DistrictID=-1&MinPrice=-1&MaxPrice=-1&CategoryID=-1&TypeID=-1",
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((res) => {
        setTableData(res.searchResponse);
        console.log("res", res.searchResponse);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("res", tableData);
  function handleExportPdf() {
    const doc = new jsPDF();
    doc.text("table data", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: tableData,
    });
    doc.save("table.pdf");
  }
  return (
    <>
      <table class="table" border="1px solid black" cellpadding="0px">
        <thead>
          <tr>
            <th>PropertyID</th>
            <th>PropID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Address</th>
            {/* <th>DistrictID</th>
            <th>District</th>
            <th>State</th>
            <th>Price</th>
            <th>PricePer</th>
            <th>Area</th>
            <th>AreaUnit</th>
            <th>PricePer</th>
            <th>Area</th>
            <th>AreaUnit</th>
            <th>Purpose</th>
            <th>Type</th>
            <th>Category</th>
            <th>Image</th>
            <th>Contact</th>
            <th>Rating</th>
            <th>Attachment</th>
            <th>UserImage</th>
            <th>UserFullName</th>
            <th>CreatedDate</th> */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.PropertyID}</td>
              <td>{data.PropID}</td>
              <td>{data.Title}</td>
              <td>{data.Slug}</td>
              <td>{data.Address}</td>
              {/* <td>{data.DistrictID}</td>
              <td>{data.District}</td>
              <td>{data.State}</td>
              <td>{data.Price}</td>
              <td>{data.PricePer}</td>
              <td>{data.Area}</td>
              <td>{data.AreaUnit}</td>
              <td>{data.PricePer}</td>
              <td>{data.Area}</td>
              <td>{data.AreaUnit}</td>
              <td>{data.Purpose}</td>
              <td>{data.Type}</td>
              <td>{data.Category}</td>
              <td>{data.Image}</td>
              <td>{data.Contact}</td>
              <td>{data.Rating}</td>
              <td>{data.Attachment}</td>
              <td>{data.UserImage}</td>
              <td>{data.UserFullName}</td>
              <td>{data.CreatedDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleExportPdf}>export</button>
    </>
  );
}
